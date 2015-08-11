module managers {
    export class Asset {
        // Public Properties
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet;
        // Private Properties
        private manifest = [
            { id: "city", src: "assets/images/city.jpg" },
            { id: "cityP", src: "assets/images/cityPurp.jpg" },
            { id: "cityB", src: "assets/images/cityBlue.jpg" },
            { id: "gameOverScrn", src: "assets/images/gameOver.png" },
            { id: "menuScrn", src: "assets/images/menu.jpg" },
            { id: "pickUp", src: "assets/audio/pickUp.wav" },
            { id: "oneUp", src: "assets/audio/oneUp.wav" },
            { id: "gameOverS", src: "assets/audio/gameOverS.wav" },
            { id: "menuS", src: "assets/audio/menuS.wav" },
            { id: "playS", src: "assets/audio/playS.wav" },
            { id: "engine", src: "assets/audio/engine.wav" },
            { id: "damage", src: "assets/audio/damage.wav" },
            { id: "bill", src: "assets/audio/bill.wav" }
        ];

        private data = {
            "images": [
                "assets/images/atlas.png"
            ],

            "frames": [
                [2, 2, 24, 25, 0, 0, 0],
                [28, 2, 48, 53, 0, -1, -1],
                [78, 2, 94, 75, 0, 0, -6],
                [174, 2, 94, 72, 0, 0, -5],
                [270, 2, 86, 70, 0, -8, -2],
                [358, 2, 92, 70, 0, -2, -5],
                [452, 2, 115, 78, 0, -2, -19],
                [569, 2, 73, 94, 0, -11, -3],
                [644, 2, 75, 76, 0, -20, -25],
                [721, 2, 108, 121, 0, -7, -1],
                [831, 2, 106, 115, 0, -11, -6],
                [939, 2, 99, 106, 0, -12, -11],
                [1040, 2, 88, 88, 0, -14, -18],
                [1130, 2, 47, 53, 0, -37, -36],
                [1179, 2, 205, 202, 0, -7, -5],
                [1386, 2, 50, 50, 0, -1, -1],
                [1438, 2, 200, 200, 0, 0, 0],
                [1640, 2, 211, 217, 0, -5, -3]
            ],
            
            "animations": {
                "bullet": [0],
                "coin": [1],
                "crow1": [2],
                "crow2": [3],
                "crow3": [4],
                "crow4": [5],
                "demon1": [6],
                "demon2": [7],
                "ex1": [8],
                "ex2": [9],
                "ex3": [10],
                "ex4": [11],
                "ex5": [12],
                "ex6": [13],
                "nextBtn": [14],
                "pirateCoin": [15],
                "playBtn": [16],
                "retryBtn": [17],
                crow: {
                    frames: [2, 3, 4, 5],
                    speed: 0.5
                },
                demon: {
                    frames: [6, 7],
                    speed: 0.2
                },
                explosion: {
                    frames: [8, 9, 10, 11, 12, 13],
                    next: false,
                    speed: 0.3
                }
            }

        }
        
        // Constructor + + + + +
        constructor() {
            this.preload();
        }
        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            // create textures
            this.atlas = new createjs.SpriteSheet(this.data);
        }
    }
}