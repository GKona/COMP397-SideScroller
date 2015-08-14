module objects {
    // DemonStrt Class + + + + +
    export class DemonStrt extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "demonStrt";
            this.sound = "damage";
            this.reset();
        }
        // Private Methods + + + + +
        private checkBounds(): void {
            // check and reset if enemy has left the screen
            if (this.x < 0) {
                this.reset();
            }
        }
        // Public Methods + + + + +
        public reset(): void {
            this.y = Math.floor(Math.random() * 510) + 20; // starts enemy at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts enemy off stage
            // reruns if 0 value
            do { this.dx = Math.floor(Math.random() * 2) + 8 }
            while (this.dx == 0);
        }
        public update(): void {
            this.x -= this.dx; // moves the enemy left through the stage
            this.checkBounds();
        }
    }
} 