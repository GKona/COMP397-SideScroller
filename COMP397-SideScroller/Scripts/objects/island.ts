module objects {
    // Island Class + + + + +
    export class Island extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "island";
            this.sound = "yay";
            this.dy = 5;
            this.reset();
        }
        // Private Methods + + + + +
        private checkBounds(): void {
            // check if island has left the screen
            if (this.y > 480 + this.height) {
                this.reset();
            }
        }
        private reset(): void {
            this.x = Math.floor(Math.random() * 640); // starts island at random location
            this.y = -this.height; // starts island off stage
        }
        // Public Methods + + + + +
        public update(): void {
            this.y += this.dy; // moves the island down the stage
            this.checkBounds();
        }
    }
}