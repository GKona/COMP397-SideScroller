module objects {
    // PirateCoin Class + + + + +
    export class PirateCoin extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "coin";
            this.sound = "pirate";
            this.dy = 1;
            this.reset();
            this.moveCntr = 0;
            this.moveDir = false;
        }
        // Public Methods + + + + +
        public moveUp() {
            if (this.dy < 0) {
                this.dy = this.dy * 1;
                this.y -= this.dy + 3; // moves the demon up
                this.moveCntr++;
            }
            if (this.dy > 0) {
                this.y -= this.dy + 3; // moves the demon up
                this.moveCntr++;
            }
        }
        public moveDown() {
            if (this.dy > 0) {
                this.dy = this.dy * 1;
                this.y += this.dy + 3; // moves the demon down
                this.moveCntr--;
            }
            if (this.dy < 0) {
                this.y += this.dy + 3; // moves the demon down
                this.moveCntr--;
            }
        }
        public reset(): void {
            this.x = Math.floor(Math.random() * 1050) + 3000; // starts demonWave off stage
            this.y = 240;
            do { this.dx = Math.floor(Math.random() * 2) + 8 }
            while (this.dx == 0);
        }
        public update(): void {
            this.x -= this.dx; // moves the pirateCoin left of stage
            // resets directional move counter
            if (this.moveCntr < -50) {
                this.moveCntr = 0;
                this.moveDir = true;
            }
            // resets directional move counter
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
        }
    }
}