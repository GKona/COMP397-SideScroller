module objects {
    // Horizon Class + + + + +
    export class Horizon extends createjs.Bitmap {
        // Public Properties + + + + +
        width: number;
        height: number;
        dx: number = 5;
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // Private Methods + + + + +
        private checkBounds(): void {
            // check if horizon has left the screen
            if (this.x == -4000) {
                this.reset();
            }
        }
        private reset(): void {
            this.y = 0;
            this.x = 0; // resets horizon off screen
        }
        // Public Methods + + + + +
        public update(): void {
            this.x -= this.dx; // moves the horizon left of the stage
            this.checkBounds();
        }
    }
}