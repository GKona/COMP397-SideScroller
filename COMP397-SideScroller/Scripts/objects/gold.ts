module objects {
    // Gold Class + + + + +
    export class Gold extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "gold";
            this.sound = "pickUp";
            this.dx = 5;
            this.reset();
        }
        // Private Methods + + + + +
        private checkBounds(): void {
            // check if gold has left the screen
            if (this.x < 0) {
                this.reset();
            }
        }
        public reset(): void {
            this.x = Math.floor(Math.random() * 500) + 1500; // starts gold at random location
            this.y = Math.floor(Math.random() * 510) + 20; // starts gold off stage
            do { this.dx = Math.floor(Math.random() * 2) + 8 }
            while (this.dx == 0);
        }
        // Public Methods + + + + +
        public update(): void {
            this.x -= this.dx; // moves the gold down the stage
            this.checkBounds();
        }
    }
}