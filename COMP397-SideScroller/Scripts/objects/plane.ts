module objects {
    // Plane Class + + + + +
    export class Plane extends createjs.Bitmap {
        // Public Properties + + + + +
        width: number;
        height: number;
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString); 
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = 430;
        }
        // Public Methods + + + + +
        public update(): void {
            this.x = stage.mouseX; // position plave under mouse
        }
    }
}