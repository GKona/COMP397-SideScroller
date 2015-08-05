module objects {
    // DemonDiag Class + + + + +
    export class DemonDiag extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "demonDiag";
            this.sound = "damage";
            this.reset();
        }
        // Private Methods + + + + +
        private checkBounds(): void {
            // check if demonDiag has left the screen
            if (this.x < 0) {
                this.reset();
            }
        }
        public reset(): void {
            this.y = Math.floor(Math.random() * 510) + 20; // starts demonDiag at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts demonDiag off stage
            do { this.dx = Math.floor(Math.random() * 2) + 8 }
            while (this.dx == 0);
            //this.dx = Math.floor(Math.random() * 10) + 5;
            do { this.dy = Math.floor(Math.random() * 4) - 2 }
            while (this.dy == 0);
            //this.dy = Math.floor(Math.random() * 4) - 2;
        }
        // Public Methods + + + + +
        public update(): void {
            this.x -= this.dx; // moves the demon left through the stage
            this.y -= this.dy; // moves the demon up and down
            this.checkBounds();
        }
    }
} 