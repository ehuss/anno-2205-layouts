'use strict';

var spritesmith = require('spritesmith');
var vm = require('vm');
var fs = require('fs');
var gm = require('gm');
var _ = require('underscore');

var outputFilename = 'app/images/buttons/construction_icons.png';

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
    var baseName = 'app/images/buttons/icons/icon_'+iconName;
    var inFilename = baseName + '.png';
    var outFilename = baseName + '_resized.png';
    gm(inFilename).resize(50, 50).write(outFilename, function(err) {
        if (err) { console.log(err); }
    });
    sprites.push(outFilename);
});

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
    var spriteMapFd = fs.openSync('app/sprite_map.js', 'w');
    fs.writeSync(spriteMapFd, '// This file is auto-generated.  DO NOT EDIT.\n\
var Anno2205Layouts = Anno2205Layouts || {};\n\
Anno2205Layouts.iconSpriteMap = {\n');
    _.each(iconNames, function(iconName) {
        var coordinates = result.coordinates['app/images/buttons/icons/icon_'+iconName+'_resized.png'];
        fs.writeSync(spriteMapFd, '    "'+iconName+'": '+JSON.stringify(coordinates)+',\n');
        count += 1;
    });
    fs.writeSync(spriteMapFd, '};\n');
    fs.close(spriteMapFd);
    console.log("Processed "+count+" files.");
});
