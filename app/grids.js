'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    /**
     * Base grid class.
     * @class Grid
     *
     * @var {String} name - Human-readable name of the grid.
     * @var {String} id - Unique id for the grid.
     * @var {Number} pixelWidth - Total width of the canvas in pixels.
     * @var {Number} pixelHeight - Total height of the canvas in pixels.
     */

    function Grid() {

    }

    /**
     * Draws the grid.
     */

    Grid.prototype.drawGrid = function() {
    };

    /************************************************************************/

    /**
     * Rectangular grid.
     * @class RectGrid
     *
     * @var {Number} gridWidth - Total width in grid units.
     * @var {Number} gridHeight - Total height in grid units.
     * @var {Number} gridOffsetX - Offset where the grid starts in pixels relative to canvas origin.
     * @var {Number} gridOffsetY - Offset where the grid starts in pixels relative to canvas origin.
     */

    function RectGrid(width, height) {
        // Grid.call(this);
        this.gridWidth = width;
        this.gridHeight = height;
        this.gridOffsetX = 30;
        this.gridOffsetY = 30;
        this.gridPixelWidth = width * Anno2205Layouts.gridSize + 1;
        this.gridPixelHeight = height * Anno2205Layouts.gridSize + 1;
        this.pixelWidth = this.gridPixelWidth + this.gridOffsetX;
        this.pixelHeight = this.gridPixelHeight + this.gridOffsetY;
        this.id = width+'x'+height;
        this.name = width + ' x ' + height;
    }
    RectGrid.prototype  = Object.create(Grid.prototype);
    RectGrid.prototype.constructor = RectGrid;

    /**
     * Creates a 2D array of objects, one for each cell of the grid, initialized
     * empty.
     */
    RectGrid.prototype.createBuildingMap = function() {
        var buildingMap = new Array(this.gridHeight);
        for (var rowi=0; rowi < this.gridHeight; rowi++) {
            var len = this.gridWidth;
            var row = new Array(len);
            buildingMap[rowi] = row;
            while (--len >= 0) { row[len] = {building: undefined, unit: undefined}; }
        }
        return buildingMap;
    };

    RectGrid.prototype.draw = function(ctx, layout) {
        this.drawGrid(ctx);
        this.drawBounds(ctx, layout);
    };

    RectGrid.prototype.drawGrid = function(ctx) {
        // create white background.
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, this.pixelWidth, this.pixelHeight);

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        var x, y;
        // Horizontal lines.
        for (var row=0; row<=this.gridHeight; row++) {
            ctx.beginPath();
            x = this.gridWidth*Anno2205Layouts.gridSize + 0.5 + this.gridOffsetX;
            y = row*Anno2205Layouts.gridSize + 0.5 + this.gridOffsetY;
            ctx.moveTo(0.5+this.gridOffsetX, y);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        // Vertical lines.
        for (var col=0; col<=this.gridWidth; col++) {
            ctx.beginPath();
            x = col*Anno2205Layouts.gridSize + 0.5 + this.gridOffsetX;
            y = this.gridHeight*Anno2205Layouts.gridSize + 0.5 + this.gridOffsetY;
            ctx.moveTo(x, 0.5 + this.gridOffsetY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };

    RectGrid.prototype.drawBounds = function(ctx, layout) {
        var icons = $("#grid-icons")[0];
        var iconMap = Anno2205Layouts.gridSpriteMap;
        var gridSize = Anno2205Layouts.gridSize;

        var drawIcon = function(icon, x, y) {
            ctx.drawImage(icons, icon.x, icon.y,
                icon.width, icon.height,
                x, y,
                icon.width, icon.height);
        };

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.gridOffsetX, 0,
            this.pixelWidth-this.gridOffsetX, this.gridOffsetY);
        ctx.fillRect(0, this.gridOffsetY,
            this.gridOffsetX, this.pixelHeight-this.gridOffsetY);
        if (layout.coverage.width) {
            var arrowLeft = iconMap['arrow-left'];
            var arrowRight = iconMap['arrow-right'];
            var arrowBarLeft = iconMap['arrow-bar-left'];
            var arrowBarRight = iconMap['arrow-bar-right'];
            // Numbers indicating the width.
            ctx.font = '25px Roboto';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000000';
            var x = layout.coverage.x * gridSize +
                (layout.coverage.width * gridSize)/2 + this.gridOffsetX;
            var text = '' + layout.coverage.width;
            ctx.fillText(text, x, this.gridOffsetY/2);

            // Left/Right arrows at the extents.
            if (layout.coverage.width > 3) {
                x = layout.coverage.x * gridSize + this.gridOffsetX;
                drawIcon(arrowBarRight, x, (this.gridOffsetY-arrowBarRight.height)/2);

                x = ((layout.coverage.x + layout.coverage.width) * gridSize -
                    arrowBarLeft.width + this.gridOffsetX);
                drawIcon(arrowBarLeft, x, (this.gridOffsetY-arrowBarLeft.height)/2);
            }

            // Height.
            ctx.save();
            ctx.translate(this.gridOffsetX, 0);
            ctx.rotate(Math.PI/2);
            x = layout.coverage.y * gridSize +
                (layout.coverage.height * gridSize)/2 + this.gridOffsetY;
            text = '' + layout.coverage.height;
            ctx.fillText(text, x, this.gridOffsetX/2);

            //Left/Right arrows at the extents.
            if (layout.coverage.height > 3) {
                x = layout.coverage.y * gridSize + this.gridOffsetY;
                drawIcon(arrowBarRight, x, (this.gridOffsetX-arrowBarRight.height)/2);

                x = ((layout.coverage.y + layout.coverage.height) * gridSize -
                    arrowBarLeft.width + this.gridOffsetY);
                drawIcon(arrowBarLeft, x, (this.gridOffsetX-arrowBarLeft.height)/2);
            }
            ctx.restore();
        }
    };

    /**
     * Return the grid coordinates from the given mouse coordinates.
     */
    RectGrid.prototype.gridFromMouse = function(canvasOffset, x, y) {
        // Determine position of the grid.
        var gridOffsetX = canvasOffset.left + this.gridOffsetX;
        var gridOffsetY = canvasOffset.top + this.gridOffsetY;
        if (x > gridOffsetX && x < gridOffsetX + this.gridPixelWidth &&
            y > gridOffsetY && y < gridOffsetY + this.gridPixelHeight) {
            var gridX = Math.floor((x - gridOffsetX) / Anno2205Layouts.gridSize);
            var gridY = Math.floor((y - gridOffsetY) / Anno2205Layouts.gridSize);
            return [gridX, gridY];
        } else {
            return undefined;
        }
    };

    Anno2205Layouts.RectGrid = RectGrid;

    Anno2205Layouts.grids = [
        new RectGrid(20, 20),
        new RectGrid(40, 40),
        new RectGrid(100, 100),
    ];

    Anno2205Layouts.gridMap = _.indexBy(Anno2205Layouts.grids, 'id');

}(Anno2205Layouts));
