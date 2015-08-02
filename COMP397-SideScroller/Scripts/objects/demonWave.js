var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // DemonWave Class + + + + +
    var DemonWave = (function (_super) {
        __extends(DemonWave, _super);
        // Constructor + + + + +
        function DemonWave(imageString) {
            _super.call(this, imageString);
            this.name = "demonWave";
            this.sound = "damage";
            this.reset();
        }
        // Private Methods + + + + +
        DemonWave.prototype.checkBounds = function () {
            // check if demonWave has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        DemonWave.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 510) + 20; // starts demonWave at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts demonWave off stage
            do {
                this.dx = Math.floor(Math.random() * 2) + 8;
            } while (this.dx == 0);
            //this.dx = Math.floor(Math.random() * 10) + 5;
            do {
                this.dy = Math.floor(Math.random() * 4) - 2;
            } while (this.dy == 0);
            //this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // Public Methods + + + + +
        DemonWave.prototype.update = function () {
            this.x -= this.dx; // moves the demon left through the stage
            this.y -= this.dy; // moves the demon up and down
            this.checkBounds();
        };
        return DemonWave;
    })(objects.GameObject);
    objects.DemonWave = DemonWave;
})(objects || (objects = {}));
//# sourceMappingURL=demonWave.js.map