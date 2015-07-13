module objects {
    // Ocean Class + + + + +
    export class Ocean extends createjs.Bitmap {
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
            // check if ocean has left the screen
            if (this.x == -4000) {
                this.reset();
            }
        }
        private reset(): void {
            this.y = 0;
            this.x = 0; // resets ocean off screen
        }
        // Public Methods + + + + +
        public update(): void {
            this.x -= this.dx; // moves the ocean down the stage
            this.checkBounds();
        }
    }
}