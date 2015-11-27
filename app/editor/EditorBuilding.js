'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    Anno2205Layouts.buildingAlpha = 0.8;
    Anno2205Layouts.productionAlpha = 0.6;
    Anno2205Layouts.maintenanceAlpha = 0.7;

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
     * @var {jQuery} unitCanvas - The <canvas> element for the unit.
     */
    var EditorUnit = function() {
        this.unitInfo = undefined;
        this.position = undefined;
        this.orientation = 0;
        this.ctx = undefined;
        this.state = undefined;
        this.color = undefined;
        this.colorAlpha = undefined;
    };

    EditorUnit.createFromStorage = function(unitStorage, color, colorAlpha) {
        var eu = new EditorUnit();
        eu.unitInfo = Anno2205Layouts.unitIdMap[unitStorage.unitInfoId];
        eu.position = unitStorage.position.slice();
        eu.orientation = unitStorage.orientation;
        eu.state = 'onGrid';
        eu.setColor(color, colorAlpha);
        return eu;
    };

    EditorUnit.createNew = function(unitInfo, color, colorAlpha, grid) {
        var eu = new EditorUnit();
        eu.unitInfo = unitInfo;
        eu.createElement(grid);
        eu.state = 'positioning';
        eu.setColor(color, colorAlpha);
        return eu;
    };

    EditorUnit.prototype.setColor = function(color, colorAlpha) {
        this.colorAlpha = colorAlpha;
        this.color = [
            parseInt(color.substr(1, 2), 16),
            parseInt(color.substr(3, 2), 16),
            parseInt(color.substr(5, 2), 16),
            colorAlpha
        ];
    };

    EditorUnit.prototype.export = function() {
        return {
            unitInfoId: this.unitInfo.id,
            position: this.position.slice(),
            orientation: this.orientation,
        };
    };

    EditorUnit.prototype.clone = function(grid) {
        var eu = new EditorUnit();
        eu.unitInfo = this.unitInfo;
        eu.position = this.position.slice();
        eu.orientation = this.orientation;
        eu.state = this.state;
        eu.color = this.color;
        eu.colorAlpha = this.colorAlpha;
        eu.createElement(grid);
        return eu;
    };

    EditorUnit.prototype.move = function(x, y) {
        this.position[0] += x;
        this.position[1] += y;
        // TODO: Move canvas?
    };

    /** Determine the bounding box of the unit.  */
    EditorUnit.prototype.bbox = function() {
        var normal = this.orientation === 0 || this.orientation === 2;
        var gridWidth = this.unitInfo.unitSize[+!normal];
        var gridHeight = this.unitInfo.unitSize[+normal];
        var width = gridWidth*Anno2205Layouts.gridSize + 1;
        var height = gridHeight*Anno2205Layouts.gridSize + 1;
        return {
            gridWidth: gridWidth,
            gridHeight: gridHeight,
            width: width,
            height: height,
            size: Math.max(width, height),
        };
    };

    EditorUnit.prototype.inGrid = function(grid) {
        var bbox = this.bbox();
        return ((this.position[0] + bbox.gridWidth <= grid.gridWidth) &&
                (this.position[1] + bbox.gridHeight <= grid.gridHeight));
    };

    /** Create the <canvas> element and add it to the document. */
    EditorUnit.prototype.createElement = function(grid) {
        var bbox = this.bbox();
        var canvasOffset = $("#anno-canvas").offset();

        var left = 0;
        var top = 0;
        if (this.position) {
            left = this.position[0]*Anno2205Layouts.gridSize + canvasOffset.left + grid.gridOffsetX;
            top = this.position[1]*Anno2205Layouts.gridSize + canvasOffset.top + grid.gridOffsetY;
        }
        this.unitCanvas = $('<canvas></canvas>').css({
            position: 'absolute',
            left: left,
            top: top,
        }).prop({
            width: bbox.size,
            height: bbox.size,
        });
        this.ctx = this.unitCanvas.get(0).getContext('2d');
        $("#construction-area").append(this.unitCanvas);
    };

    EditorUnit.prototype.demolish = function() {
        if (this.unitCanvas) {
            this.unitCanvas.remove();
        }
    };

    EditorUnit.prototype.hitTest = function(pageX, pageY) {
        var offset = this.unitCanvas.offset();
        var bbox = this.bbox();
        var relativeX = pageX - offset.left;
        var relativeY = pageY - offset.top;
        if (relativeX > 0 && relativeY > 0 &&
            relativeX < bbox.width && relativeY < bbox.height) {
            var pixel = this.ctx.getImageData(relativeX, relativeY, 1, 1).data;
            // Hit if not transparent.
            return pixel[3] > 0;
        }
    };

    EditorUnit.prototype.eachUnitGrid = function(cb) {
        var bbox = this.bbox();
        var shape = this.rotatedShape();
        for (var x=0; x<bbox.gridWidth; x++) {
            for (var y=0; y<bbox.gridHeight; y++) {
                if (!shape || shape[y][x]) {
                    cb(x+this.position[0], y+this.position[1]);
                }
            }
        }
    };

    // TODO: Make this a property of the unit.
    EditorUnit.prototype.rotatedShape = function() {
        if (this.unitInfo.unitShape) {
            return Anno2205Layouts.rotateShape(this.unitInfo.unitShape, this.orientation);
        } else {
            return undefined;
        }
    };

    /** Draw the unit on its canvas. */
    EditorUnit.prototype.draw = function() {
        var bbox = this.bbox();
        var ctx = this.ctx;
        ctx.clearRect(0, 0, bbox.size, bbox.size);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = 'rgba('+this.color.join(',')+')';
        ctx.beginPath();
        if (this.unitInfo.unitShape) {
            var shape = this.rotatedShape();

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
        if (this.unitInfo.showIcon === undefined || this.unitInfo.showIcon) {
            var iconSheet = $('#construction-icons')[0];
            var icon = Anno2205Layouts.iconSpriteMap.coordinates[this.unitInfo.icon];
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
        }
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
        this.maintenance = {};
        this._color = '#ff0000';
    };

    EditorBuilding.prototype._setStatus = function() {
        this.productionEnabled = this.type.productionUnit && this.productionModules.length < this.type.productionLimit;
        this.maintenanceEnabled = this.type.maintenanceModules && this.maintenanceModules.length < 5;
        console.log(this.productionEnabled);
    };

    EditorBuilding.prototype.color = function(newColor) {
        if (arguments.length) {
            this._color = newColor;
            this.eachUnit(function(unit) {
                unit.setColor(newColor, unit.colorAlpha);
                unit.draw();
            });
        } else {
            return this._color;
        }
    };

    EditorBuilding.createFromStorage = function(buildingStorage) {
        var eb = new EditorBuilding();
        eb.type = Anno2205Layouts.unitIdMap[buildingStorage.buildingId];
        eb._color = buildingStorage.color ? buildingStorage.color : eb.type.color;
        eb.buildingUnit = EditorUnit.createFromStorage(buildingStorage.building,
            eb._color, Anno2205Layouts.buildingAlpha);
        eb.productionModules = _.map(buildingStorage.productionModules,
            function(modInfo) {
                return EditorUnit.createFromStorage(modInfo,
                    eb._color, Anno2205Layouts.productionAlpha);
            });
        eb.maintenanceModules = _.map(buildingStorage.maintenanceModules,
            function(modInfo) {
                return EditorUnit.createFromStorage(modInfo,
                    eb._color, Anno2205Layouts.maintenanceAlpha);
            });
        eb._computeMaintenance();
        eb._setStatus();
        return eb;
    };

    EditorBuilding.createNew = function(buildingType, buildingUnit, grid) {
        var eb = new EditorBuilding();
        eb.type = buildingType;
        eb._color = buildingType.color;
        if (buildingUnit) {
            eb.buildingUnit = buildingUnit;
        } else {
            eb.buildingUnit = EditorUnit.createNew(buildingType,
                buildingType.color, Anno2205Layouts.buildingAlpha, grid);
        }
        eb._computeMaintenance();
        eb._setStatus();
        return eb;
    };

    EditorBuilding.prototype.export = function() {
        return {
            buildingId: this.type.id,
            building: this.buildingUnit.export(),
            color: this._color,
            productionModules: _.map(this.productionModules, function(module) {
                return module.export();
            }),
            maintenanceModules: _.map(this.maintenanceModules, function(module) {
                return module.export();
            }),
        };
    };

    EditorBuilding.prototype._computeMaintenance = function() {
        var R = Anno2205Layouts.Resource;
        this.constructionCost = _.clone(this.type.constructionCost);
        this.production = _.clone(this.type.production);
        this.consumption = _.clone(this.type.consumption);
        this.maintenance = _.clone(this.type.maintenance);
        this.output = _.clone(this.type.production);
        R.subi(this.output, this.type.consumption);

        if (this.productionModules.length) {
            var prod = R.mul(this.type.production,
              this.type.productionUnit.effects.productivity * this.productionModules.length);
            R.addi(this.production, prod);
            R.addi(this.output, prod);
            // TODO: assume consumption is the same??
            var cons = R.mul(this.type.consumption,
              this.type.productionUnit.effects.productivity * this.productionModules.length);
            R.addi(this.consumption, cons);
            R.subi(this.output, cons);
            var maint = R.mul(this.type.maintenance,
              this.type.productionUnit.effects.maintenance * this.productionModules.length);
            R.addi(this.maintenance, maint);
        }

        var maintAdjust = {};
        var self = this;
        _.each(this.maintenanceModules, function(module) {
            R.addi(self.constructionCost, module.unitInfo.constructionCost[self.type.region]);
            _.each(module.unitInfo.effects, function(value, key) {
                if (_.isString(value)) {
                    // Percentage.
                    var amount = parseInt(value, 10) / 100;
                    R.addikey(maintAdjust, key, self.maintenance[key] * amount);
                } else {
                    // Logistics aren't computed, so value will be empty.
                    R.addikey(maintAdjust, key, value);
                }
            });
        });
        R.addi(this.maintenance, maintAdjust);
        R.roundi(this.constructionCost);
        R.roundi(this.production);
        R.roundi(this.consumption);
        R.roundi(this.maintenance);
        R.roundi(this.output);
    };

    EditorBuilding.prototype.eachUnit = function(cb) {
        cb(this.buildingUnit);
        _.each(this.productionModules, function(unit) {
            cb(unit);
        });
        _.each(this.maintenanceModules, function(unit) {
            cb(unit);
        });
    };

    EditorBuilding.prototype.createElements = function(grid) {
        this.eachUnit(function(unit) {unit.createElement(grid);});
    };

    EditorBuilding.prototype.draw = function() {
        this.eachUnit(function(unit) {unit.draw();});
    };

    EditorBuilding.prototype.demolish = function() {
        this.eachUnit(function(unit) {unit.demolish();});
    };

    EditorBuilding.prototype.move = function(x, y) {
        this.eachUnit(function(unit) {
            unit.move(x, y);
        });
    };

    EditorBuilding.prototype.addProdMod = function(unit) {
        this.productionModules.push(unit);
        this._setStatus();
    };

    EditorBuilding.prototype.addMaintMod = function(unit) {
        this.maintenanceModules.push(unit);
        this._setStatus();
    };

    EditorBuilding.prototype._removeModule = function(modules, unit) {
        var i = modules.indexOf(unit);
        modules.splice(i, 1);
        unit.demolish();
        this._setStatus();
    };

    EditorBuilding.prototype.removeProdMod = function(unit) {
        this._removeModule(this.productionModules, unit);
    };

    EditorBuilding.prototype.removeMaintMod = function(unit) {
        this._removeModule(this.maintenanceModules, unit);
    };

    Anno2205Layouts.EditorBuilding = EditorBuilding;

}(Anno2205Layouts));
