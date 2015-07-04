module objects {
    // Cloud Class + + + + +
    export class Cloud extends createjs.Bitmap {
        // Public Properties + + + + +
        width: number;
        height: number;
        dy: number;
        dx: number;
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.reset();
        }
        // Private Methods + + + + +
        private checkBounds(): void {
            // check if cloud has left the screen
            if (this.y > 480 + this.height) {
                this.reset();
            }
        }
        private reset(): void {
            this.x = Math.floor(Math.random() * 640); // starts cloud at random location
            this.y = -this.height; // starts cloud off stage
            this.dy = Math.floor(Math.random() * 5) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;
        }
        // Public Methods + + + + +
        public update(): void {
            this.y += this.dy; // moves the cloud down the stage
            this.x += this.dx; // moves the cloud right and left
            this.checkBounds();
        }
    }
} 