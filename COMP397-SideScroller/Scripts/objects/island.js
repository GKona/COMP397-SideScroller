var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class + + + + +
    var Island = (function (_super) {
        __extends(Island, _super);
        // Constructor + + + + +
        function Island(imageString) {
            _super.call(this, imageString);
            this.name = "island";
            this.sound = "yay";
            this.dy = 5;
            this.reset();
        }
        // Private Methods + + + + +
        Island.prototype.checkBounds = function () {
            // check if island has left the screen
            if (this.y > 480 + this.height) {
                this.reset();
            }
        };
        Island.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 640); // starts island at random location
            this.y = -this.height; // starts island off stage
        };
        // Public Methods + + + + +
        Island.prototype.update = function () {
            this.y += this.dy; // moves the island down the stage
            this.checkBounds();
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map