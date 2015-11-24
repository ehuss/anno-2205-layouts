'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    /**
     * Represents all of the user's layouts.
     * @class
     */
    function Layouts($storage) {
        this.$storage = $storage;
        // $storage.version = null;

        var version = $storage.version;
        if (version) {
            console.log("welcome back");
            if (version != 1) {
                console.log("Unexpected storage version." + version);
                // TODO: Error dialog.
                return;
            }
            this._load($storage);
        } else {
            console.log("first time here");
            this.initStorage();
            this.layouts = [];
            // this.createLayout("Test Layout", "earth");
            // this.createLayout("Earth Housing", "earth");
            // this.createLayout("Rice Fields", "earth");
            // this.createLayout("Large Production", "arctic");
            // this.export();
        }
    }

    Layouts.prototype.initStorage = function() {
        this.$storage.version = 1;
        this.$storage.nextId = 1;
        this.$storage.layouts = [];
    };

    Layouts.prototype._load = function($storage) {
        this.layouts = _.map($storage.layouts, function(layoutStorage) {
            return Anno2205Layouts.Layout.createFromStorage(layoutStorage);
        });
    };

    Layouts.prototype.export = function() {
        this.$storage.layouts = _.map(this.layouts, function(layout) {
            return layout.export();
        });
    };

    /*
    function createUniqueId(layout, layouts) {
        var idStart = layout.name.replace(/[ /]/g, '-').
            replace(/[,?:@&=+$#]/g, '');
        var id = idStart;
        var idIndex = 2;
        do {
            var updated = false;
            $.each(layouts, function(i, otherLayout) {
                if (layout.id !== otherLayout.id) {
                    if (id == otherLayout.id) {
                        id = idStart + '-' + idIndex;
                        idIndex += 1;
                        updated = true;
                    }
                }
            });
        } while (updated);
        console.log("id is " + id);
        return id;
    }
    */

    var getLayoutIndex = function(layouts, id) {
        return _.findIndex(layouts, function(l) {return l.id == id;});
    };

    Layouts.prototype.createUniqueId = function() {
        var id = this.$storage.nextId;
        this.$storage.nextId += 1;
        return id;
    };

    Layouts.prototype.createLayout = function(name, region) {
        var layout = Anno2205Layouts.Layout.createNew(name, region);
        layout.id = this.createUniqueId(layout);
        this.layouts.push(layout);
        return layout;
    };

    Layouts.prototype.deleteLayout = function(id) {
        var i = getLayoutIndex(this.layouts, id);
        if (i != -1) {
            this.layouts.splice(i, 1);
        }
    };

    Layouts.prototype.updateLayout = function(newLayout) {
        var i = getLayoutIndex(this.layouts, newLayout.id);
        if (i == -1) {
            throw new Error("Failed to find layout id "+newLayout.id);
        }
        this.layouts[i] = newLayout;
    };

    Layouts.prototype.layoutFromId = function(id) {
        return this.layouts[getLayoutIndex(this.layouts, id)];
    };

    Anno2205Layouts.Layouts = Layouts;

    /***********************************************************************/

    /**
     * An individual user layout.
     * @class
     *
     * @var {Number} id - A unique (for this user) identifier for this layout.
     * @var {String} name - The user's name for the layout.
     * @var {Date} createDate - Date when the layout was created.
     * @var {Date} lastModifiedDate - Date when this layout was last modified.
     * @var {String} region - "earth", "arctic", "moon".
     * @var {Array} buildings - Array of EditorBuilding objects.
     */

    // TODO: store the grid shape (20x20, island, etc.).
    var Layout = function() {
    };

    Layout.prototype.copy = function() {
        return Layout.createFromStorage(this.export());
    };

    Layout.createNew = function(name, region) {
        var layout = new Layout();
        var now = new Date();
        layout.name = name;
        layout.createDate = now;
        layout.lastModifiedDate = now;
        layout.region = region;
        layout.grid = Anno2205Layouts.gridMap['40x40'];
        layout.buildings = [];
        layout.createBuildingMap();
        return layout;
    };

    Layout.createFromStorage = function(layoutStorage) {
        var layout = new Layout();
        layout.id = layoutStorage.id;
        layout.name = layoutStorage.name;
        layout.createDate = new Date(layoutStorage.createDate);
        layout.lastModifiedDate = new Date(layoutStorage.lastModifiedDate);
        layout.region = layoutStorage.region;
        if (layoutStorage.grid) {
            layout.grid = Anno2205Layouts.gridMap[layoutStorage.grid];
        } else {
            layout.grid = Anno2205Layouts.gridMap['20x20'];
        }
        layout.buildings = _.map(layoutStorage.buildings, function(buildingStorage) {
            return Anno2205Layouts.EditorBuilding.createFromStorage(buildingStorage);
        });
        layout.createBuildingMap();
        return layout;
    };

    Layout.prototype.createBuildingMap = function() {
        this.buildingMap = this.grid.createBuildingMap();
        var layout = this;
        _.each(this.buildings, function(building) {
            building.eachUnit(function(unit) {
                unit.eachUnitGrid(function(x, y) {
                    layout.buildingMap[x][y].building = building;
                    layout.buildingMap[x][y].unit = unit;
                });
            });
        });
        this.setCoverage();
    };

    Layout.prototype.setCoverage = function() {
        console.log('setCoverage');
        this.coverage = {};
        var layout = this;
        this.coverage.x = this.buildings.length ? 10000 : 0;
        this.coverage.y = this.coverage.x;
        var maxX = -1;
        var maxY = -1;
        _.each(layout.buildingMap, function(row, x) {
            _.each(row, function(square, y) {
                if (square.building) {
                    layout.coverage.x = Math.min(layout.coverage.x, x);
                    layout.coverage.y = Math.min(layout.coverage.y, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            });
        });
        this.coverage.width = maxX - this.coverage.x + 1;
        this.coverage.height = maxY - this.coverage.y + 1;
    };

    Layout.prototype.export = function() {
        var result = {
            id: this.id,
            name: this.name,
            createDate: this.createDate,
            lastModifiedDate: this.lastModifiedDate,
            region: this.region,
            grid: this.grid.id,
        };
        result.buildings = _.map(this.buildings, function (building) {
            return building.export();
        });
        return result;
    };

    Layout.prototype.gridChange = function(grid) {
        if (arguments.length) {
            this.grid = grid;
            // Remove any buildings that are outside the new grid.
            this.buildings = _.filter(this.buildings, function(building) {
                if (!building.buildingUnit.inGrid(grid)) {
                    building.demolish();
                    return false;
                } else {
                    return true;
                }
            });
            // Remove any modules outside the new grid.
            var filterUnit = function(unit) {
                if (!unit.inGrid(grid)) {
                    unit.demolish();
                    return false;
                } else {
                    return true;
                }
            };
            _.each(this.buildings, function(building) {
                building.productionModules = _.filter(building.productionModules, filterUnit);
                building.maintenanceModules = _.filter(building.maintenanceModules, filterUnit);
            });

            // Update the map.
            this.createBuildingMap();
        } else {
            return this.grid;
        }
    };

    Layout.prototype.bbox = function() {
        var minX = this.buildings.length ? 10000 : 0;
        var minY = minX;
        var maxX = 0;
        var maxY = 0;
        _.each(this.buildings, function(building) {
            building.eachUnit(function(unit) {
                var unitBBox = unit.bbox();
                minX = Math.min(minX, unit.position[0]);
                minY = Math.min(minY, unit.position[1]);
                maxX = Math.max(maxX, unit.position[0]+unitBBox.gridWidth);
                maxY = Math.max(maxY, unit.position[1]+unitBBox.gridHeight);
            });
        });
        return {
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            width: maxX-minX,
            height: maxY-minY,
        };
    };

    // Checks if the unit can be placed at its current position
    // (checks for overlapping with other units, etc.).
    Layout.prototype.checkValid = function(unit) {
        if (!unit.inGrid(this.grid)) {
            return false;
        }
        var layout = this;
        var valid = true;
        unit.eachUnitGrid(function(x, y) {
            if (layout.buildingMap[x][y].building) {
                valid = false;
            }
        });
        return valid;
    };

    Layout.prototype.addUnit = function(building, unit) {
        var layout = this;
        unit.eachUnitGrid(function (x, y) {
            layout.buildingMap[x][y].building = building;
            layout.buildingMap[x][y].unit = unit;
        });
        this.setCoverage();
    };

    Layout.prototype.removeUnit = function(unit) {
        var layout = this;
        unit.eachUnitGrid(function (x, y) {
            layout.buildingMap[x][y].building = undefined;
            layout.buildingMap[x][y].unit = undefined;
        });
        this.setCoverage();
    };

    Layout.prototype.addBuilding = function(building) {
        this.buildings.push(building);
        var layout = this;
        building.eachUnit(function (unit) {
            layout.addUnit(building, unit);
        });
    };

    Layout.prototype.addProdMod = function(building, unit) {
        building.productionModules.push(unit);
        this.addUnit(building, unit);
    };

    Layout.prototype.addMaintMod = function(building, unit) {
        building.maintenanceModules.push(unit);
        this.addUnit(building, unit);
    };

    Layout.prototype.removeBuilding = function(building) {
        var i = this.buildings.indexOf(building);
        this.buildings.splice(i, 1);
        building.demolish();
        building.eachUnit(this.removeUnit.bind(this));
    };

    Layout.prototype._removeModule = function(modules, unit) {
        var i = modules.indexOf(unit);
        modules.splice(i, 1);
        unit.demolish();
        this.removeUnit(unit);
    };

    Layout.prototype.removeProdMod = function(building, unit) {
        this._removeModule(building.productionModules, unit);
    };

    Layout.prototype.removeMaintMod = function(building, unit) {
        this._removeModule(building.maintenanceModules, unit);
    };

    Layout.prototype.moveAllBuildings = function(x, y) {
        _.each(this.buildings, function(building) {
            building.move(x, y);
        });
        this.createBuildingMap();
    };

    Anno2205Layouts.Layout = Layout;

}(Anno2205Layouts));
