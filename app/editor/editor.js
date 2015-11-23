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
    $scope.grids = Anno2205Layouts.grids;

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
        $rootScope.layouts.export();
        $location.path('/my-layouts');
    };

    $scope.setActiveLevel = function(level, event) {
        _.each(Anno2205Layouts.buildingLevels[$scope.layout.region], function(level) {
            level.background = level.backgroundBase;
        });
        $scope.activeLevel = level.id;
        level.background = level.backgroundActive;
    };

    // Determine the grid position from mouse coordinates.
    // The `c` parameters are the position and size for the grid.
    var gridFromMouse = function(cLeft, cTop, cWidth, cHeight, x, y) {
        // Determine position of the grid.
        if (x > cLeft && x < cLeft+cWidth &&
            y > cTop && y < cTop+cHeight) {
            var gridX = Math.floor((x - cLeft) / Anno2205Layouts.gridSize);
            var gridY = Math.floor((y - cTop) / Anno2205Layouts.gridSize);
            return [gridX, gridY];
        } else {
            return undefined;
        }
    };

    var createNewUnitHandlers = function(unit, placeCallback) {
        var gridCanvas = $("#anno-canvas");
        var canvasWidth = gridCanvas.width();
        var canvasHeight = gridCanvas.height();
        var canvasOffset = gridCanvas.offset();

        // Disable while placing.
        buildingClickHandler =
            prodModuleClickHandler =
            maintModuleClickHandler = undefined;

        // While mouse is down, this is true.
        var creating = false;

        // Drag the unit with the mouse. Ensure it stays aligned to the
        // construction grid when hovering over the grid.
        var freeMoveFunction = function(event) {
            var gridPos  = gridFromMouse(canvasOffset.left, canvasOffset.top,
                    canvasWidth, canvasHeight, event.pageX, event.pageY);
            if (gridPos === undefined) {
                // Mouse is off the grid.
                unit.unitCanvas.css({
                    left: event.pageX,
                    top: event.pageY,
                });
            } else {
                unit.unitCanvas.css({
                    left: gridPos[0]*Anno2205Layouts.gridSize + canvasOffset.left,
                    top: gridPos[1]*Anno2205Layouts.gridSize + canvasOffset.top,
                });
                if (creating) {
                    createUnit(event.pageX, event.pageY);
                }
            }
        };
        $("html").mousemove(freeMoveFunction);

        // Creates a new unit.
        var createUnit = function(pageX, pageY) {
            var gridPos  = gridFromMouse(canvasOffset.left, canvasOffset.top,
                    canvasWidth, canvasHeight, pageX, pageY);
            if (gridPos !== undefined) {
                var gridX = Math.floor((pageX - canvasOffset.left) / Anno2205Layouts.gridSize);
                var gridY = Math.floor((pageY - canvasOffset.top) / Anno2205Layouts.gridSize);
                unit.position = [gridX, gridY];
                if ($scope.layout.checkValid(unit)) {
                    creating = true;
                    if (!placeCallback(unit)) {
                        // Stop placing.
                        creating = false;
                        unit.demolish();
                    }
                }
            }
        };

        var positionDown = function(event) {
            if (event.which == 1) {  // Left mouse
                createUnit(event.pageX, event.pageY);
            } else if (event.which == 2) { // Middle mouse.
                // TODO: What does Anno do?
                rotateCounterClockwise();
                unit.draw();
            } else if (event.which == 3) { // Right Mouse.
                // TODO, stop creating.
            }
        };

        var positionUp = function(event) {
            if (event.which == 1) {
                if (creating) {
                    creating = false;
                    positionCleanup();
                }
            }
        };
        $("#construction-area").on('mousedown', positionDown);
        $("#construction-area").on('mouseup', positionUp);

        var rotateCounterClockwise = function() {
            unit.orientation -= 1;
            if (unit.orientation < 0) {
                unit.orientation = 3;
            }
        };
        var rotateClockwise = function() {
            unit.orientation += 1;
            if (unit.orientation > 3) {
                unit.orientation = 0;
            }
        };


        var positionUnitKey = function(event) {
            if (event.which == 188) { // ,
                rotateCounterClockwise();
                unit.draw();
            } else if (event.which == 190) { // .
                rotateClockwise();
                unit.draw();
            }
        };
        $(document).on('keydown', positionUnitKey);

        var positionCleanup = function() {
            unit.demolish();
            $(document).off('keydown', positionUnitKey);
            $('html').off('mousemove', freeMoveFunction);
            $("#construction-area")
                .off('mousedown', positionDown)
                .off('mousedown', positionUp);
            buildingClickHandler = buildingDefaultClickHandler;
        };
    };

    $scope.createNewBuilding = function(buildingType) {
        if (buildingType.placementType != 'ground') {
            // TODO: Handle other types.
            return;
        }
        var buildingUnit = Anno2205Layouts.EditorUnit.createNew(buildingType,
            buildingType.color, Anno2205Layouts.buildingAlpha);
        buildingUnit.draw();
        createNewUnitHandlers(buildingUnit, function(unit) {
            var building = new Anno2205Layouts.EditorBuilding.createNew(
                buildingType, buildingUnit.clone());
            building.buildingUnit.state = 'onGrid';
            building.buildingUnit.draw();
            $scope.layout.addBuilding(building);
            return true;
        });
    };

    var drawBuildings = function() {
        _.each($scope.layout.buildings, function(building) {
            building.createElements();
            building.draw();
        });
    };

    $scope.setActiveLevel(Anno2205Layouts.buildingLevels[$scope.layout.region][0]);


    // When you click on a building, it creates a popup, and marks the building
    // selected.
    var buildingDefaultClickHandler = function(building) {
        $scope.selectedBuilding = building;
        $scope.buildingPopup.show = true;
        var buildingOffset = building.buildingUnit.unitCanvas.offset();
        var buildingBBox = building.buildingUnit.bbox();
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
                if (buildingClickHandler) {
                    buildingClickHandler(building);
                    return true;
                } else {
                    return false;
                }
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
        var buildingType = $scope.selectedBuilding.type;
        var newProdMod = Anno2205Layouts.EditorUnit.createNew(
            buildingType.productionUnit,
            buildingType.color, Anno2205Layouts.productionAlpha);
        newProdMod.draw();
        createNewUnitHandlers(newProdMod, function(unit) {
            var newUnit = unit.clone();
            newUnit.state = 'onGrid';
            newUnit.draw();
            $scope.layout.addProdMod($scope.selectedBuilding, newUnit);
            return true;
        });
    };
    $scope.createMaintenanceModule = function(maintenance) {
        $scope.buildingPopup.show = false;
        var buildingType = $scope.selectedBuilding.type;
        var newMaintMod = Anno2205Layouts.EditorUnit.createNew(
            maintenance,
            buildingType.color, Anno2205Layouts.maintenanceAlpha);
        newMaintMod.draw();
        createNewUnitHandlers(newMaintMod, function(unit) {
            var newUnit = unit.clone();
            newUnit.state = 'onGrid';
            newUnit.draw();
            $scope.layout.addMaintMod($scope.selectedBuilding, newUnit);
            return true;
        });
    };

    // While in demolition mode, if you click on a building, delete it.
    var demolitionClickHandler = function(building) {
        $scope.layout.removeBuilding(building);
    };
    var demoProdClickHandler = function(building, module) {
        $scope.layout.removeProdMod(building, module);
    };
    var demoMaintClickHandler = function(building, module) {
        $scope.layout.removeMaintMod(building, module);
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
        var layoutBBox = $scope.layout.bbox();
        var grid = new Anno2205Layouts.RectGrid(layoutBBox.width+2,
                                                layoutBBox.height+2);
        var offset = {
            x: layoutBBox.minX-1,
            y: layoutBBox.minY-1
        };
        var gridCanvas = $('<canvas></canvas>')
            .prop('width', grid.pixelWidth)
            .prop('height', grid.pixelHeight);
        var canvas = gridCanvas[0];
        var ctx = canvas.getContext('2d');

        // Grid.
        grid.drawGrid(ctx);
        // Buildings.
        var draw = function(unit) {
            ctx.drawImage(unit.unitCanvas[0],
                (unit.position[0] - offset.x) * Anno2205Layouts.gridSize,
                (unit.position[1] - offset.y) * Anno2205Layouts.gridSize);
        };
        _.each($scope.layout.buildings, function(building) {
            draw(building.buildingUnit);
            _.each(building.productionModules, function(unit) {
                draw(unit);
            });
            _.each(building.maintenanceModules, function(unit) {
                draw(unit);
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

    $('#construction-icons').on('load', function() {
        // Ensure icons are available before drawing on the canvas.
        drawBuildings();
    });

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
})

.directive('annoGridDraw', function() {
    return {
        link: function(scope, element, attrs) {
            scope.$watch('layout.grid', function() {
                var canvas = $("#anno-canvas");
                scope.layout.grid.drawGrid(canvas[0].getContext('2d'));
            });
        }
    };
});
