module objects {
    // Island Class + + + + +
    export class Island extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "island";
            this.sound = "pickUp";
            this.dy = 5;
            this.reset();
        }
        // Private Methods + + + + +
        private checkBounds(): void {
            // check if island has left the screen
            if (this.x < 0) {
                this.reset();
            }
        }
        private reset(): void {
            this.x = 1050; // starts island at random location
            this.y = Math.floor(Math.random() * 510) + 20; // starts island off stage
            do { this.dx = Math.floor(Math.random() * 2) + 8 }
            while (this.dx == 0);
        }
        // Public Methods + + + + +
        public update(): void {
            this.x -= this.dx; // moves the island down the stage
            this.checkBounds();
        }
    }
}