var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // PirateCoin Class + + + + +
    var PirateCoin = (function (_super) {
        __extends(PirateCoin, _super);
        // Constructor + + + + +
        function PirateCoin(imageString) {
            _super.call(this, imageString);
            this.name = "coin";
            this.sound = "pirate";
            this.dy = 1;
            this.reset();
            this.moveCntr = 0;
            this.moveDir = false;
        }
        // Public Methods + + + + +
        PirateCoin.prototype.moveUp = function () {
            if (this.dy < 0) {
                this.dy = this.dy * 1;
                this.y -= this.dy + 3; // moves the demon up
                this.moveCntr++;
            }
            if (this.dy > 0) {
                this.y -= this.dy + 3; // moves the demon up
                this.moveCntr++;
            }
        };
        PirateCoin.prototype.moveDown = function () {
            if (this.dy > 0) {
                this.dy = this.dy * 1;
                this.y += this.dy + 3; // moves the demon down
                this.moveCntr--;
            }
            if (this.dy < 0) {
                this.y += this.dy + 3; // moves the demon down
                this.moveCntr--;
            }
        };
        PirateCoin.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 1050) + 3000; // starts demonWave off stage
            this.y = 240;
            do {
                this.dx = Math.floor(Math.random() * 2) + 8;
            } while (this.dx == 0);
        };
        PirateCoin.prototype.update = function () {
            this.x -= this.dx; // moves the pirateCoin left of stage
            // resets directional move counter
            if (this.moveCntr < -50) {
                this.moveCntr = 0;
                this.moveDir = true;
            }
            else if (this.moveCntr > 50) {
                this.moveCntr = 0;
                this.moveDir = false;
            }
            if (this.moveDir) {
                this.moveUp();
            }
            else if (!this.moveDir) {
                this.moveDown();
            }
            // check and reset if enemy has left the screen
            if (this.x < -10) {
                this.reset();
            }
        };
        return PirateCoin;
    })(objects.GameObject);
    objects.PirateCoin = PirateCoin;
})(objects || (objects = {}));
//# sourceMappingURL=piratecoin.js.map