var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Gold Class + + + + +
    var Gold = (function (_super) {
        __extends(Gold, _super);
        // Constructor + + + + +
        function Gold(imageString) {
            _super.call(this, imageString);
            this.name = "gold";
            this.sound = "pickUp";
            this.dx = 5;
            this.reset();
        }
        // Private Methods + + + + +
        Gold.prototype.checkBounds = function () {
            // check if gold has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        // Public Methods + + + + +
        Gold.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 500) + 1500; // starts gold at random location
            this.y = Math.floor(Math.random() * 510) + 20; // starts gold off stage
            // reruns if 0 value
            do {
                this.dx = Math.floor(Math.random() * 2) + 8;
            } while (this.dx == 0);
        };
        Gold.prototype.update = function () {
            this.x -= this.dx; // moves the gold down the stage
            this.checkBounds();
        };
        return Gold;
    })(objects.GameObject);
    objects.Gold = Gold;
})(objects || (objects = {}));
//# sourceMappingURL=gold.js.map