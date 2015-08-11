﻿module objects {
    // DemonWave Class + + + + +
    export class DemonWave extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "demonWave";
            this.sound = "damage";
            this.reset();
            this.moveCntr = 0;
            this.moveDir= false;
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
        public moveUp() {
            if (this.dy < 0) {
                this.dy = this.dy * 1;
                this.y -= this.dy; // moves the demon up
                this.moveCntr++;
            }
            if (this.dy > 0) {
                this.y -= this.dy; // moves the demon up
                this.moveCntr++;
            }
        }
        public moveDown() {
            if (this.dy > 0) {
                this.dy = this.dy * 1;
                this.y += this.dy; // moves the demon down
                this.moveCntr--;
            }
            if (this.dy < 0) {
                this.y += this.dy; // moves the demon down
                this.moveCntr--;
            }
        }
        
        public reset(): void {
            this.y = Math.floor(Math.random() * 510) + 20; // starts demonWave at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts demonWave off stage
            //this.y = 300;
            //this.x = 500;
            do { this.dx = Math.floor(Math.random() * 2) + 8 }
            while (this.dx == 0);
            //this.dx = Math.floor(Math.random() * 10) + 5;
            do { this.dy = Math.floor(Math.random() * 4) - 2 }
            while (this.dy == 0);
            //this.dy = 2;
            //this.dy = Math.floor(Math.random() * 4) - 2;
        }
        // Public Methods + + + + +
        public update(): void {
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
            
        }
    }
} 