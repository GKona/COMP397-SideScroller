var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Horizon Class + + + + +
    var Horizon = (function (_super) {
        __extends(Horizon, _super);
        // Constructor + + + + +
        function Horizon(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // Private Methods + + + + +
        Horizon.prototype.checkBounds = function () {
            // check if horizon has left the screen
            if (this.x == -4000) {
                this.reset();
            }
        };
        Horizon.prototype.reset = function () {
            // resets horizon off screen
            this.y = 0;
            this.x = 0;
        };
        // Public Methods + + + + +
        Horizon.prototype.update = function () {
            this.x -= this.dx; // moves the horizon left of the stage
            this.checkBounds();
        };
        return Horizon;
    })(createjs.Bitmap);
    objects.Horizon = Horizon;
})(objects || (objects = {}));
//# sourceMappingURL=horizon.js.map