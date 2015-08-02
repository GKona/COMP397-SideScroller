var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // DemonDiag Class + + + + +
    var DemonDiag = (function (_super) {
        __extends(DemonDiag, _super);
        // Constructor + + + + +
        function DemonDiag(imageString) {
            _super.call(this, imageString);
            this.name = "demonDiag";
            this.sound = "damage";
            this.reset();
        }
        // Private Methods + + + + +
        DemonDiag.prototype.checkBounds = function () {
            // check if demonDiag has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        DemonDiag.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 510) + 20; // starts demonDiag at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts demonDiag off stage
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
        DemonDiag.prototype.update = function () {
            this.x -= this.dx; // moves the demon left through the stage
            this.y -= this.dy; // moves the demon up and down
            this.checkBounds();
        };
        return DemonDiag;
    })(objects.GameObject);
    objects.DemonDiag = DemonDiag;
})(objects || (objects = {}));
//# sourceMappingURL=demonDiag.js.map