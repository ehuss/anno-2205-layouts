'use strict';

var spritesmith = require('spritesmith');
var vm = require('vm');
var fs = require('fs');
var path = require('path');
var gm = require('gm');
var _ = require('underscore');
var glob = require('glob');

var outputFilename = 'images/buttons/construction_icons.png';

var annoFiles = ['app/regions.js', 'app/buildings.js'];
var Anno2205Layouts = {};
_.each(annoFiles, function(filename) {
    var bStr = fs.readFileSync(filename);
    var context = {};
    vm.runInNewContext(bStr, context);
    _.extend(Anno2205Layouts, context.Anno2205Layouts);
});

var sprites = [];

var iconNames = [];

// Collect the sprite filenames and resize the files.
_.each(Anno2205Layouts.regions, function(region) {
    _.each(Anno2205Layouts.buildingLevels[region], function(level) {
        _.each(level.buildings, function(building) {
            iconNames.push(building.icon);
        });
    });
    _.each(Anno2205Layouts.commonBuildings[region], function(building) {
        iconNames.push(building.icon);
    });
});
_.each(Anno2205Layouts.maintenanceModules, function(module) {
    iconNames.push(module.icon);
});

_.each(iconNames, function(iconName) {
    var baseName = 'images/buttons/icons/icon_'+iconName;
    var inFilename = baseName + '.png';
    var outFilename = baseName + '_resized.png';
    gm(inFilename).resize(50, 50).write(outFilename, function(err) {
        if (err) { console.log(err); }
    });
    sprites.push(outFilename);
});

var spriteMapFd = fs.openSync('app/sprite_map.js', 'w');
fs.writeSync(spriteMapFd, '// This file is auto-generated.  DO NOT EDIT.\n\
var Anno2205Layouts = Anno2205Layouts || {};\n');

// Create a spritesheet.
spritesmith({src: sprites}, function handleResult (err, result) {
    if (err) {
        console.log(err);
        return;
    }
    // result.image; // Buffer representation of image
    // result.coordinates; // Object mapping filename to {x, y, width, height} of image
    // result.properties; // Object with metadata about spritesheet {width, height}

    fs.writeFileSync(outputFilename, result.image);

    var count = 0;
    fs.writeSync(spriteMapFd, 'Anno2205Layouts.iconSpriteMap = {\n');
    _.each(iconNames, function(iconName) {
        var coordinates = result.coordinates['images/buttons/icons/icon_'+iconName+'_resized.png'];
        fs.writeSync(spriteMapFd, '    "'+iconName+'": '+JSON.stringify(coordinates)+',\n');
        count += 1;
    });
    fs.writeSync(spriteMapFd, '};\n');
    console.log("Processed "+count+" icon files.");


    // Create canvas icons.
    var gridNames = glob.sync('images/grid/*.png', {ignore: '**/grid-sheet.png'});
    spritesmith({src: gridNames}, function handleResult(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        fs.writeFileSync('images/grid/grid-sheet.png', result.image);
        var count = 0;

        fs.writeSync(spriteMapFd, 'Anno2205Layouts.gridSpriteMap = {\n');
        _.each(result.coordinates, function(coordinates, key) {
            key = path.basename(key, '.png').replace(/grid-sheet_[0-9]+_/, '');
            fs.writeSync(spriteMapFd, '    "'+key+'": '+JSON.stringify(coordinates)+',\n');
            count += 1;
        });
        fs.writeSync(spriteMapFd, '};\n');
        console.log('Processed '+count+' grid files.');

        fs.close(spriteMapFd);
    });
});

