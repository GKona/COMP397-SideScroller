module managers {
    export class Asset {
        // Public Properties
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet;
        // Private Properties
        private manifest = [
            { id: "city", src: "assets/images/city.jpg" },
            { id: "gameOverScrn", src: "assets/images/gameOver.png" },
            { id: "menuScrn", src: "assets/images/menu.jpg" },
            { id: "pickUp", src: "assets/audio/pickUp.wav" },
            { id: "oneUp", src: "assets/audio/oneUp.wav" },
            { id: "gameOverS", src: "assets/audio/gameOverS.wav" },
            { id: "menuS", src: "assets/audio/menuS.wav" },
            { id: "playS", src: "assets/audio/playS.wav" },
            { id: "engine", src: "assets/audio/engine.wav" },
            { id: "damage", src: "assets/audio/damage.wav" }
        ];

        private data = {
            "images": [
                "assets/images/atlas.png"
            ],

            "frames": [
                [2, 2, 24, 25, 0, 0, 0],
                [28, 2, 50, 55, 0, 0, 0],
                [80, 2, 100, 83, 0, 0, 0],
                [182, 2, 100, 83, 0, 0, 0],
                [284, 2, 100, 83, 0, 0, 0],
                [386, 2, 100, 83, 0, 0, 0],
                [488, 2, 120, 99, 0, 0, 0],
                [610, 2, 120, 99, 0, 0, 0],
                [732, 2, 120, 125, 0, 0, 0],
                [854, 2, 120, 125, 0, 0, 0],
                [976, 2, 120, 125, 0, 0, 0],
                [1098, 2, 120, 125, 0, 0, 0],
                [1220, 2, 120, 125, 0, 0, 0],
                [1342, 2, 120, 125, 0, 0, 0],
                [1464, 2, 52, 52, 0, 0, 0],
                [1518, 2, 200, 200, 0, 0, 0],
                [1720, 2, 220, 220, 0, 0, 0]
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
                "pirateCoin": [14],
                "playBtn": [15],
                "retryBtn": [16],
                crow: {
                    frames: [2, 3, 4, 5],
                    speed: 0.5
                },
                demon: {
                    frames: [6, 7],
                    speed: 0.2
                },
                explosion: {
                    frames: [8, 13],
                    speed: 0.8
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