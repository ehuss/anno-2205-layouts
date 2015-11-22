'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    function Grid() {

    }

    Grid.prototype.drawGrid = function(ctx) {
    };

    /************************************************************************/

    function RectGrid(width, height) {
        // Grid.call(this);
        this.gridWidth = width;
        this.gridHeight = height;
        this.pixelWidth = width * Anno2205Layouts.gridSize + 1;
        this.pixelHeight = height * Anno2205Layouts.gridSize + 1;
        this.id = width+'x'+height;
        this.name = width + ' x ' + height;
    }
    RectGrid.prototype  = Object.create(Grid.prototype);
    RectGrid.prototype.constructor = RectGrid;

    RectGrid.prototype.drawGrid = function(ctx) {
        // create white background.
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, this.pixelWidth, this.pixelHeight);

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        var x, y;
        for (var row=0; row<=this.gridHeight; row++) {
            ctx.beginPath();
            x = this.gridWidth*Anno2205Layouts.gridSize + 0.5;
            y = row*Anno2205Layouts.gridSize + 0.5;
            ctx.moveTo(0, y);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        for (var col=0; col<=this.gridWidth; col++) {
            ctx.beginPath();
            x = col*Anno2205Layouts.gridSize + 0.5;
            y = this.gridHeight*Anno2205Layouts.gridSize + 0.5;
            ctx.moveTo(x, 0.5);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };


    Anno2205Layouts.grids = [
        new RectGrid(20, 20),
        new RectGrid(40, 40),
        new RectGrid(100, 100),
    ];

    Anno2205Layouts.gridMap = _.indexBy(Anno2205Layouts.grids, 'id');

}(Anno2205Layouts));
