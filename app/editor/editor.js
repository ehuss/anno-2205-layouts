'use strict';

angular.module('anno2205Layouts.editor', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editor/:layoutId', {
    templateUrl: 'editor/editor.html',
    controller: 'EditorCtrl'
  });
}])

.controller('EditorCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$localStorage',
    function($rootScope, $scope, $location, $routeParams, $localStorage) {

    var layout = $rootScope.layouts.layoutFromId($routeParams.layoutId);
    // Make a deep copy to edit locally.
    $scope.layout = layout.copy();

    $scope.levels = Anno2205Layouts.buildingLevels;
    $scope.commonBuildings = Anno2205Layouts.commonBuildings;

    $scope.deleteLayout = function() {
        $rootScope.layouts.deleteLayout($routeParams.layoutId);
        $('#delete-layout-modal').modal('hide');
        $location.path('/my-layouts');
    };

    $scope.discardLayout = function() {
        $('#cancel-layout-modal').modal('hide');
        $location.path('/my-layouts');
    };

    $scope.saveLayout = function() {
        $rootScope.layouts.updateLayout($scope.layout);
        $location.path('/my-layouts');
    };

    $scope.setActiveLevel = function(level, event) {
        _.each(Anno2205Layouts.buildingLevels[$scope.layout.region], function(level) {
            level.background = level.backgroundBase;
        });
        $scope.activeLevel = level.id;
        level.background = level.backgroundActive;
    };

    $scope.createNewBuilding = function(buildingType) {
        if (buildingType.placementType != 'ground') {
            // TODO: Handle other types.
            return;
        }
        var newBuilding = Anno2205Layouts.EditorBuilding.createNew(buildingType);
        newBuilding.draw();
        newBuilding.buildingUnit.createPositionHandlers(function(editorUnit) {
            $scope.layout.buildings.push(newBuilding);
        });
    };

    var drawBuildings = function() {
        _.each($scope.layout.buildings, function(building) {
            building.draw();
        });
    };

    var drawGrid = function(canvas) {
        var ctx = canvas.getContext('2d');
        // create white background.
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 401, 401);

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        for (var row=0; row<=20; row++) {
            ctx.beginPath();
            ctx.moveTo(0.5, row*Anno2205Layouts.gridSize + 0.5);
            ctx.lineTo(20*Anno2205Layouts.gridSize + 0.5, row*Anno2205Layouts.gridSize + 0.5);
            ctx.stroke();
        }
        for (var col=0; col<=20; col++) {
            ctx.beginPath();
            ctx.moveTo(col*Anno2205Layouts.gridSize + 0.5, 0.5);
            ctx.lineTo(col*Anno2205Layouts.gridSize + 0.5, 20*Anno2205Layouts.gridSize + 0.5);
            ctx.stroke();
        }
    };

    $scope.setActiveLevel(Anno2205Layouts.buildingLevels[$scope.layout.region][0]);

    var canvas = $("#anno-canvas");
    drawGrid(canvas[0]);
    drawBuildings();

    // When you click on a building, it creates a popup, and marks the building
    // selected.
    var buildingDefaultClickHandler = function(building) {
        $scope.selectedBuilding = building;
        $scope.buildingPopup.show = true;
        var buildingOffset = building.buildingUnit.buildingCanvas.offset();
        var buildingBBox = building.buildingUnit.unitBBox();
        $scope.buildingPopup.left = buildingOffset.left + buildingBBox.width/2 + 50;
        $scope.buildingPopup.top = buildingOffset.top + buildingBBox.height/2 - 100;
    };

    var buildingClickHandler = buildingDefaultClickHandler;
    var prodModuleClickHandler, maintModuleClickHandler;

    $scope.constAreaClick = function(event) {
        // Determine which (if any) building was clicked on.
        var found = _.find($scope.layout.buildings, function(building) {
            if (building.buildingUnit.state != 'onGrid') {
                return false;
            }
            if (building.buildingUnit.hitTest(event.pageX, event.pageY)) {
                buildingClickHandler(building);
                return true;
            }
            if (prodModuleClickHandler) {
                if (_.find(building.productionModules, function(module) {
                    if (module.hitTest(event.pageX, event.pageY)) {
                        prodModuleClickHandler(building, module);
                        return true;
                    }
                })) {
                    return true;
                }
            }
            if (maintModuleClickHandler) {
                if (_.find(building.maintenanceModules, function(module) {
                    if (module.hitTest(event.pageX, event.pageY)) {
                        maintModuleClickHandler(building, module);
                        return true;
                    }
                })) {
                    return true;
                }
            }
            return false;
        });
        if (!found) {
            // TODO: Put this in a separate mis-click handler?
            $scope.buildingPopup.show = false;
        }
    };

    $scope.buildingPopup = {
        show: false,
        left: 0,
        top: 0
    };
    $scope.createProductionModule = function() {
        $scope.buildingPopup.show = false;
        var newProdMod = Anno2205Layouts.EditorUnit.createNew($scope.selectedBuilding.type.productionUnit);
        newProdMod.drawUnit();
        newProdMod.createPositionHandlers(function(editorUnit) {
            $scope.selectedBuilding.productionModules.push(editorUnit);
        });
    };
    $scope.createMaintenanceModule = function(maintenance) {
        $scope.buildingPopup.show = false;
        var newMaintMod = Anno2205Layouts.EditorUnit.createNew(maintenance);
        newMaintMod.drawUnit();
        newMaintMod.createPositionHandlers(function(editorUnit) {
            $scope.selectedBuilding.maintenanceModules.push(editorUnit);
        });
    };

    // While in demolition mode, if you click on a building, delete it.
    var demolitionClickHandler = function(building) {
        var i = $scope.layout.buildings.indexOf(building);
        $scope.layout.buildings.splice(i, 1);
        building.demolish();
    };
    var demoModule = function(modules, module) {
        var i = modules.indexOf(module);
        modules.splice(i, 1);
        module.demolish();
    };
    var demoProdClickHandler = function(building, module) {
        demoModule(building.productionModules, module);
    };
    var demoMaintClickHandler = function(building, module) {
        demoModule(building.maintenanceModules, module);
    };
    var exitDemoHandler = function(event) {
        if (event.which == 3) { // Right click.
            exitDemoMode();
            return false;
        }
    };
    $scope.enterDemoMode = function() {
        buildingClickHandler = demolitionClickHandler;
        prodModuleClickHandler = demoProdClickHandler;
        maintModuleClickHandler = demoMaintClickHandler;
        $(document).on('contextmenu', exitDemoHandler);

        $('#construction-area').css('cursor',
         'url("images/demolish-cursor.png") 5 35,crosshair');
    };
    var exitDemoMode = function() {
        buildingClickHandler = buildingDefaultClickHandler;
        prodModuleClickHandler = undefined;
        maintModuleClickHandler = undefined;
        $(document).off('contextmenu', exitDemoHandler);
        $('#construction-area').css('cursor', 'auto');
    };

    var globalKeyboardShortcuts = function(event) {
        if (event.which == 68) { //d
            $scope.enterDemoMode();
        }
    };

    $(document).on('keydown', globalKeyboardShortcuts);
    $scope.$on('$destroy', function() {
        $(document).off('keydown', globalKeyboardShortcuts);
    });


    $scope.exportImage = function() {
        var gridCanvas = $('#anno-canvas');
        var canvas = gridCanvas.clone()[0];
        var ctx = canvas.getContext('2d');

        // Canvas.
        ctx.drawImage(gridCanvas[0], 0, 0);
        // Buildings.
        var canvasOffset = gridCanvas.offset();
        var drawUnit = function(unit) {
            var unitCanvas = unit.buildingCanvas;
            var unitOffset = unitCanvas.offset();
            ctx.drawImage(unitCanvas[0],
                unitOffset.left - canvasOffset.left,
                unitOffset.top - canvasOffset.top);
        };
        _.each($scope.layout.buildings, function(building) {
            drawUnit(building.buildingUnit);
            _.each(building.productionModules, function(unit) {
                drawUnit(unit);
            });
            _.each(building.maintenanceModules, function(unit) {
                drawUnit(unit);
            });
        });


        // Create a download link.
        // TODO: How to make this work in IE/Safari?
        var data = canvas.toDataURL('image/png');
        var name = $scope.layout.name.replace(/[ /]/g, '-')
            .replace(/[,?:@&=+$#*\\]/g, '');
        var link = $("<a></a>")
            .attr('download', 'layout-'+name+'.png')
            .attr('href', data);
        $("body").append(link);
        link[0].click();
        link.remove();
    };
}])


.directive('annoHover', function() {
    return {
        scope: {
            hover: '=annoHover',
            hoverBase: '=annoHoverBase',
            hoverEnabled: '&annoHoverEnabled',
        },
        link: function(scope, element, attrs) {
            scope.$watch('hoverBase', function() {
                element.css('background', scope.hoverBase);
            });
            element.css('background', scope.hoverBase);
            element.hover(function() {
                var enabled = scope.$eval(scope.hoverEnabled);
                if (typeof enabled === 'undefined' || enabled) {
                    element.css('background', scope.hover);
                }
            }, function() {
                var enabled = scope.$eval(scope.hoverEnabled);
                if (typeof enabled === 'undefined' || enabled) {
                    element.css('background', scope.hoverBase);
                }
            });
        }
    };
});
