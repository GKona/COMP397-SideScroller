var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class + + + + +
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // Constructor + + + + +
        function Cloud(imageString) {
            _super.call(this, imageString);
            this.name = "cloud";
            this.sound = "damage";
            this.reset();
        }
        // Private Methods + + + + +
        Cloud.prototype.checkBounds = function () {
            // check if cloud has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Cloud.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 510) + 20; // starts cloud at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts cloud off stage
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
        Cloud.prototype.update = function () {
            this.x -= this.dx; // moves the demon left through the stage
            this.y -= this.dy; // moves the demon up and down
            this.checkBounds();
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map