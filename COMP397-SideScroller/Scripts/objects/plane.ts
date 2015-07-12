module objects {
    // Plane Class + + + + +
    export class Plane extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString); 
            this.sound = "engine";
            this.sound2 = "playS";
            this.x = 100;
            this.y = 250;
            createjs.Sound.play(this.sound, { "loop": -1, "volume": 0.5 });
            createjs.Sound.play(this.sound2, { "loop": -1, "volume": 0.2 });
            
        }
        // Public Methods + + + + +
        public update(): void {
            if (stage.mouseY < 80) {
                this.y = 80;
            }
            else if (stage.mouseY > 480) {
                this.y = 480;
            }
            else if (stage.mouseY > 80 && stage.mouseY < 470) {
                this.y = stage.mouseY; // position plane under mouse
            }
        }
        public destroy() {
            // remove sound and sprite
            createjs.Sound.stop();
            game.removeChild(plane);
        }
    }
}