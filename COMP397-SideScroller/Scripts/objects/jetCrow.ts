module objects {
    // jetCrow Class + + + + +
    export class JetCrow extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString); 
            this.sound = "engine";
            this.x = 100;
            this.y = 250;
            createjs.Sound.play(this.sound, { "loop": -1, "volume": 0.4 });
        }
        // Public Methods + + + + +
        public update(): void {
            if (stage.mouseY < 45) {
                this.y = 45;
            }
            else if (stage.mouseY > 480) {
                this.y = 480;
            }
            else if (stage.mouseY > 45 && stage.mouseY < 470) {
                this.y = stage.mouseY; // position jetCrow under mouse
            }

            if (stage.mouseX < 65) {
                this.x = 65;
            }
            else if (stage.mouseX > 900) {
                this.x = 900;
            }
            else if (stage.mouseX > 65 && stage.mouseX < 900) {
                this.x = stage.mouseX; // position jetCrow under mouse
            }


        }
        public destroy() {
            // remove sound and sprite
            createjs.Sound.stop();
            game.removeChild(jetCrow);
        }
    }
}