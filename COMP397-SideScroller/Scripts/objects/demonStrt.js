var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // DemonStrt Class + + + + +
    var DemonStrt = (function (_super) {
        __extends(DemonStrt, _super);
        // Constructor + + + + +
        function DemonStrt(imageString) {
            _super.call(this, imageString);
            this.name = "demonStrt";
            this.sound = "damage";
            this.reset();
        }
        // Private Methods + + + + +
        DemonStrt.prototype.checkBounds = function () {
            // check if demonStrt has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        DemonStrt.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 510) + 20; // starts demonStrt at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts demonStrt off stage
            do {
                this.dx = Math.floor(Math.random() * 2) + 8;
            } while (this.dx == 0);
            //this.dx = Math.floor(Math.random() * 10) + 5;
            //do { this.dy = Math.floor(Math.random() * 4) - 2 }
            //while (this.dy == 0);
            //this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // Public Methods + + + + +
        DemonStrt.prototype.update = function () {
            this.x -= this.dx; // moves the demon left through the stage
            //this.y -= this.dy; // moves the demon up and down
            this.checkBounds();
        };
        return DemonStrt;
    })(objects.GameObject);
    objects.DemonStrt = DemonStrt;
})(objects || (objects = {}));
//# sourceMappingURL=demonStrt.js.map