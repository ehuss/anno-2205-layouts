'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    /**
     * Represents all of the user's layouts.
     * @class
     */
    var Layouts = function($storage) {
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
            $storage.version = 1;
            $storage.nextId = 1;
            $storage.layouts = [];
            this.layouts = [];
            // this.createLayout("Test Layout", "earth");
            // this.createLayout("Earth Housing", "earth");
            // this.createLayout("Rice Fields", "earth");
            // this.createLayout("Large Production", "arctic");
            this.export();
        }
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
        layout.buildings = [];
        return layout;
    };

    Layout.createFromStorage = function(layoutStorage) {
        var layout = new Layout();
        layout.id = layoutStorage.id;
        layout.name = layoutStorage.name;
        layout.createDate = layoutStorage.createDate;
        layout.lastModifiedDate = layoutStorage.lastModifiedDate;
        layout.region = layoutStorage.region;
        layout.buildings = _.map(layoutStorage.buildings, function(buildingStorage) {
            return Anno2205Layouts.EditorBuilding.createFromStorage(buildingStorage);
        });
        return layout;
    };

    Layout.prototype.export = function() {
        var result = {
            id: this.id,
            name: this.name,
            createDate: this.createDate,
            lastModifiedDate: this.lastModifiedDate,
            region: this.region,
        };
        result.buildings = _.map(this.buildings, function (building) {
            return building.export();
        });
        return result;
    };

    Anno2205Layouts.Layout = Layout;


}(Anno2205Layouts));

