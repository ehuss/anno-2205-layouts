'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    /**
     * The EditorUnit represents a unit on the grid (a building, a production
     * module, or a maintenance module).
     * @class EditorUnit
     *
     * @var {object} type - The BuildingType object.
     * @var {Array} position - The position in the grid [x, y].  undefined if
     *     not placed.
     * @var {boolean} orientation - Number of clockwise rotations.
     * @var {CanvasRenderingContext2D} ctx - The context for rendering the unit.
     * @var {jQuery} buildingCanvas - The <canvas> element for the unit.
     */
    var EditorUnit = function() {
        this.unitInfo = undefined;
        this.position = undefined;
        this.orientation = 0;
        this.ctx = undefined;
        this.state = undefined;
    };

    EditorUnit.createFromStorage = function(unitStorage) {
        var eu = new EditorUnit();
        eu.unitInfo = Anno2205Layouts.unitIdMap[unitStorage.unitInfoId];
        eu.position = unitStorage.position.slice();
        eu.orientation = unitStorage.orientation;
        eu.createElement();
        eu.state = 'onGrid';
        return eu;
    };

    EditorUnit.createNew = function(unitInfo) {
        var eu = new EditorUnit();
        eu.unitInfo = unitInfo;
        eu.createElement();
        eu.state = 'positioning';
        return eu;
    };

    EditorUnit.prototype.export = function() {
        return {
            unitInfoId: this.unitInfo.id,
            position: this.position.slice(),
            orientation: this.orientation,
        };
    };

    /** Determine the bounding box of the unit.  */
    EditorUnit.prototype.unitBBox = function() {
        var normal = this.orientation === 0 || this.orientation === 2;
        var width = this.unitInfo.unitSize[+!normal]*Anno2205Layouts.gridSize + 1;
        var height = this.unitInfo.unitSize[+normal]*Anno2205Layouts.gridSize + 1;
        return {
            width: width,
            height: height,
            size: Math.max(width, height),
        };
    };

    /** Create the <canvas> element and add it to the document. */
    EditorUnit.prototype.createElement = function() {
        var bbox = this.unitBBox();
        var gridCanvas = $("#anno-canvas");
        var canvasOffset = gridCanvas.offset();
        var left = 0;
        var top = 0;
        if (this.position) {
            left = this.position[0]*Anno2205Layouts.gridSize + canvasOffset.left;
            top = this.position[1]*Anno2205Layouts.gridSize + canvasOffset.top;
        }
        this.buildingCanvas = $('<canvas></canvas>').css({
            position: 'absolute',
            left: left,
            top: top,
        }).prop({
            width: bbox.size,
            height: bbox.size,
        });
        this.ctx = this.buildingCanvas.get(0).getContext('2d');
        $("#construction-area").append(this.buildingCanvas);
    };

    EditorUnit.prototype.demolish = function() {
        this.buildingCanvas.remove();
    };

    EditorUnit.prototype.hitTest = function(pageX, pageY) {
        var offset = this.buildingCanvas.offset();
        var bbox = this.unitBBox();
        var relativeX = pageX - offset.left;
        var relativeY = pageY - offset.top;
        if (relativeX > 0 && relativeY > 0 &&
            relativeX < bbox.width && relativeY < bbox.height) {
            var pixel = this.ctx.getImageData(relativeX, relativeY, 1, 1).data;
            // Hit if not transparent.
            return pixel[3] > 0;
        }
    };

    /** Draw the unit on its canvas. */
    EditorUnit.prototype.drawUnit = function() {
        var bbox = this.unitBBox();
        var ctx = this.ctx;
        ctx.clearRect(0, 0, bbox.size, bbox.size);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = 'rgba(238, 0, 0, 0.8)';
        ctx.beginPath();
        if (this.unitInfo.unitShape) {
            var shape = Anno2205Layouts.rotateShape(
                this.unitInfo.unitShape, this.orientation);

            var moves = [];
            _.each(shape, function(row) {
                var zeroes = _.indexOf(row, 1);
                var ones = _.reduce(row, function(memo, x) { return memo+x;}, 0);
                moves.push([zeroes, ones]);
            });

            // Move horizontal, then down 1 grid along the top/right side.
            var x = 0;
            var y = 0.5;
            ctx.moveTo(moves[0][0]*Anno2205Layouts.gridSize+0.5, 0.5);
            _.each(moves, function(row) {
                x = (row[0]+row[1]) * Anno2205Layouts.gridSize + 0.5;
                ctx.lineTo(x, y);
                y += Anno2205Layouts.gridSize;
                ctx.lineTo(x, y);
            });

            // Move horizontal, then up 1 grid along the bottom/left side.
            // Array of [numOfZeroes, numOfOnes]
            _.each(moves.reverse(), function(row) {
                x = row[0] * Anno2205Layouts.gridSize + 0.5;
                ctx.lineTo(x, y);
                y -= Anno2205Layouts.gridSize;
                ctx.lineTo(x, y);
            });

            ctx.stroke();
            ctx.fill();
        } else {
            // Simple square.
            ctx.rect(0.5, 0.5, bbox.width-1, bbox.height-1);
            ctx.stroke();
            ctx.fill();
        }
        // Draw the icon in the middle.
        var iconSheet = $('<img src="images/buttons/construction_icons.png">')[0];
        var icon = this.unitInfo.icon;
        var iconScale = this.unitInfo.iconScale || 1.0;
        if (icon.width * iconScale > bbox.width ||
            icon.height * iconScale > bbox.height) {
            // Icon is larger than the unit.
            var widthScale = bbox.width/icon.width;
            var heightScale = bbox.height/icon.height;
            iconScale = Math.min(widthScale, heightScale) * 0.9;
        }
        var targetIconWidth = icon.width * iconScale;
        var targetIconHeight = icon.height * iconScale;
        ctx.drawImage(iconSheet, icon.x, icon.y,
            icon.width, icon.height,
            bbox.width/2 - targetIconWidth/2, bbox.height/2 - targetIconHeight/2,
            targetIconWidth, targetIconHeight);
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

    /**
     * Adds event handlers for positioning a unit.
     * @param {function} placeCallback - Called once the unit is placed.
     *     Arguments are (editorUnit).
     */
    EditorUnit.prototype.createPositionHandlers = function(placeCallback) {
        var gridCanvas = $("#anno-canvas");
        var canvasWidth = gridCanvas.width();
        var canvasHeight = gridCanvas.height();
        var eu = this;

        // Drag the building with the mouse. Ensure it stays aligned to the
        // construction grid when hovering over the grid.
        var freeMoveFunction = function(event) {
            var canvasOffset = gridCanvas.offset();
            var gridPos  = gridFromMouse(canvasOffset.left, canvasOffset.top,
                    canvasWidth, canvasHeight, event.pageX, event.pageY);
            if (gridPos === undefined) {
                eu.buildingCanvas.css({
                    left: event.pageX,
                    top: event.pageY,
                });
            } else {
                eu.buildingCanvas.css({
                    left: gridPos[0]*Anno2205Layouts.gridSize + canvasOffset.left,
                    top: gridPos[1]*Anno2205Layouts.gridSize + canvasOffset.top,
                });
            }
        };
        $("html").mousemove(freeMoveFunction);

        // Create a click handler to place the building.
        var positionClick = function(event) {
            var canvasOffset = gridCanvas.offset();
            var gridPos  = gridFromMouse(canvasOffset.left, canvasOffset.top,
                    canvasWidth, canvasHeight, event.pageX, event.pageY);
            if (gridPos !== undefined) {
                var gridX = Math.floor((event.pageX - canvasOffset.left) / Anno2205Layouts.gridSize);
                var gridY = Math.floor((event.pageY - canvasOffset.top) / Anno2205Layouts.gridSize);
                eu.position = [gridX, gridY];
                eu.state = 'onGrid';
                placeCallback(eu);
                positionCleanup();
            }
        };
        $("#construction-area").on('click', positionClick);

        var rotateCounterClockwise = function() {
            eu.orientation -= 1;
            if (eu.orientation < 0) {
                eu.orientation = 3;
            }
        };
        var rotateClockwise = function() {
            eu.orientation += 1;
            if (eu.orientation > 3) {
                eu.orientation = 0;
            }
        };

        // MMB handler for rotating the unit.
        var rotateClick = function(event) {
            if (event.which == 2) {
                // TODO: What does Anno do?
                rotateCounterClockwise();
                eu.drawUnit();
            }
        };
        $("#construction-area").on('mousedown', rotateClick);

        var positionUnitKey = function(event) {
            if (event.which == 188) { // ,
                rotateCounterClockwise();
                eu.drawUnit();
            } else if (event.which == 190) { // .
                rotateClockwise();
                eu.drawUnit();
            }
        };
        $(document).on('keydown', positionUnitKey);

        var positionCleanup = function() {
            $(document).off('keydown', positionUnitKey);
            $('html').off('mousemove', freeMoveFunction);
            $("#construction-area")
                .off('click', positionClick)
                .off('mousedown', rotateClick);
        };
    };

    Anno2205Layouts.EditorUnit = EditorUnit;

    /***************************************************************************/

    /**
     * The EditorBuilding represents a building, its production modules, and its
     * maintenance modules.
     * @class EditorBuilding
     *
     */
    var EditorBuilding = function() {
        this.type = undefined;
        this.buildingUnit = undefined;
        this.productionModules = [];
        this.maintenanceModules = [];
    };

    EditorBuilding.createFromStorage = function(buildingStorage) {
        var eb = new EditorBuilding();
        eb.buildingUnit = EditorUnit.createFromStorage(buildingStorage.building);
        eb.type = Anno2205Layouts.unitIdMap[buildingStorage.buildingId];
        eb.productionModules = _.map(buildingStorage.productionModules, function(modInfo) {
            return EditorUnit.createFromStorage(modInfo);
        });
        eb.maintenanceModules = _.map(buildingStorage.maintenanceModules, function(modInfo) {
            return EditorUnit.createFromStorage(modInfo);
        });
        return eb;
    };

    EditorBuilding.createNew = function(buildingType) {
        var eb = new EditorBuilding();
        eb.type = buildingType;
        eb.buildingUnit = EditorUnit.createNew(buildingType);
        return eb;
    };

    EditorBuilding.prototype.export = function() {
        return {
            buildingId: this.type.id,
            building: this.buildingUnit.export(),
            productionModules: _.map(this.productionModules, function(module) {
                return module.export();
            }),
            maintenanceModules: _.map(this.maintenanceModules, function(module) {
                return module.export();
            }),
        };
    };

    EditorBuilding.prototype.draw = function() {
        this.buildingUnit.drawUnit();
        _.each(this.productionModules, function(unit) {
            unit.drawUnit();
        });
        _.each(this.maintenanceModules, function(unit) {
            unit.drawUnit();
        });
    };

    EditorBuilding.prototype.demolish = function() {
        this.buildingUnit.demolish();
        _.each(this.productionModules, function(module) { module.demolish(); });
        _.each(this.maintenanceModules, function(module) { module.demolish(); });
    };

    Anno2205Layouts.EditorBuilding = EditorBuilding;


}(Anno2205Layouts));
