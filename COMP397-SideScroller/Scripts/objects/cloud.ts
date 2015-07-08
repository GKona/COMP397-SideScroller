module objects {
    // Cloud Class + + + + +
    export class Cloud extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "cloud";
            this.sound = "thunder";
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