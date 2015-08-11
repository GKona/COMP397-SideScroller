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
            this.moveCntr = 0;
            this.moveDir = false;
        }
        // Private Methods + + + + +
        /*
        private checkBounds(): void {
            
            // check if demonWave has left the screen
            this.x -= this.dx; // moves the demon left through the stage
            if (constants.MOVE_COUNTER < -10) {
                constants.MOVE_DIR =
            }
            else if (constants.MOVE_COUNTER > 10) {

            }

            if (this.x < 0) {
                this.reset();
            }
            if (constants.MOVE_COUNTER < -10 || constants.MOVE_COUNTER > 10) {
                constants.MOVE_COUNTER = 0;
            }
            if (constants.MOVE_DIR) {

            }
            else if (!constants.MOVE_DIR) {

            }
        }
        */
        DemonWave.prototype.moveUp = function () {
            if (this.dy < 0) {
                this.dy = this.dy * 1;
                this.y -= this.dy; // moves the demon up
                this.moveCntr++;
            }
            if (this.dy > 0) {
                this.y -= this.dy; // moves the demon up
                this.moveCntr++;
            }
        };
        DemonWave.prototype.moveDown = function () {
            if (this.dy > 0) {
                this.dy = this.dy * 1;
                this.y += this.dy; // moves the demon down
                this.moveCntr--;
            }
            if (this.dy < 0) {
                this.y += this.dy; // moves the demon down
                this.moveCntr--;
            }
        };
        DemonWave.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 510) + 20; // starts demonWave at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts demonWave off stage
            //this.y = 300;
            //this.x = 500;
            do {
                this.dx = Math.floor(Math.random() * 2) + 8;
            } while (this.dx == 0);
            //this.dx = Math.floor(Math.random() * 10) + 5;
            do {
                this.dy = Math.floor(Math.random() * 4) - 2;
            } while (this.dy == 0);
            //this.dy = 2;
            //this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // Public Methods + + + + +
        DemonWave.prototype.update = function () {
            //this.x -= this.dx; // moves the demon left through the stage
            //this.y -= this.dy; // moves the demon up and down
            //this.checkBounds();
            // check if demonWave has left the screen
            this.x -= this.dx; // moves the demon left through the stage
            if (this.moveCntr < -50) {
                this.moveDir = true;
            }
            else if (this.moveCntr > 50) {
                this.moveDir = false;
            }
            // reset counter
            if (this.moveCntr < -50) {
                this.moveCntr = 0;
                this.moveDir = true;
            }
            else if (this.moveCntr > 50) {
                this.moveCntr = 0;
                this.moveDir = false;
            }
            // moves up and down
            if (this.moveDir) {
                this.moveUp();
            }
            else if (!this.moveDir) {
                this.moveDown();
            }
            // moved past left of screen
            if (this.x < 0) {
                this.reset();
            }
        };
        return DemonWave;
    })(objects.GameObject);
    objects.DemonWave = DemonWave;
})(objects || (objects = {}));
//# sourceMappingURL=demonWave.js.map