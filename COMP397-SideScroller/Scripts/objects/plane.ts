module objects {
    // Plane Class + + + + +
    export class Plane extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString); 
            this.sound = "engine";
            this.y = 430;
        }
        // Public Methods + + + + +
        public update(): void {
            this.x = stage.mouseX; // position plave under mouse
        }
    }
}