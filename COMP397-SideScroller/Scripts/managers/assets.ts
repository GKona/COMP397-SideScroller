﻿module managers {
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
            { id: "gameOverS", src: "assets/audio/gameOverS.wav" },
            { id: "menuS", src: "assets/audio/menuS.wav" },
            { id: "playS", src: "assets/audio/playS.wav" },
            { id: "engine", src: "assets/audio/engine.wav" }
        ];

        private data = {
            "images": [
                "assets/images/atlas.png"
            ],

            "frames": [
                [2, 2, 24, 25, 0, 0, 0],
                [28, 2, 50, 55, 0, 0, 0],
                [2, 59, 100, 83, 0, 0, 0],
                [2, 59, 100, 83, 0, 0, 0],
                [2, 144, 100, 83, 0, 0, 0],
                [2, 144, 100, 83, 0, 0, 0],
                [2, 229, 100, 83, 0, 0, 0],
                [2, 229, 100, 83, 0, 0, 0],
                [2, 314, 100, 83, 0, 0, 0],
                [2, 314, 100, 83, 0, 0, 0],
                [2, 399, 120, 99, 0, 0, 0],
                [2, 500, 120, 99, 0, 0, 0],
                [2, 601, 120, 125, 0, 0, 0],
                [2, 601, 120, 125, 0, 0, 0],
                [2, 728, 120, 125, 0, 0, 0],
                [2, 728, 120, 125, 0, 0, 0],
                [2, 855, 120, 125, 0, 0, 0],
                [2, 855, 120, 125, 0, 0, 0],
                [2, 982, 120, 125, 0, 0, 0],
                [2, 982, 120, 125, 0, 0, 0],
                [2, 1109, 120, 125, 0, 0, 0],
                [2, 1109, 120, 125, 0, 0, 0],
                [2, 1236, 120, 125, 0, 0, 0],
                [2, 1236, 120, 125, 0, 0, 0],
                [2, 1363, 52, 52, 0, 0, 0]
            ],
            
            "animations": {
                "bullet": [0],
                "coin": [1],
                "crow1": [2],
                "crow1b": [3],
                "crow2": [4],
                "crow2b": [5],
                "crow3": [6],
                "crow3b": [7],
                "crow4": [8],
                "crow4b": [9],
                "demon1": [10],
                "demon2": [11],
                "ex1": [12],
                "ex1b": [13],
                "ex2": [14],
                "ex2b": [15],
                "ex3": [16],
                "ex3b": [17],
                "ex4": [18],
                "ex4b": [19],
                "ex5": [20],
                "ex5b": [21],
                "ex6": [22],
                "ex6b": [23],
                "pirateCoin": [24],
                crow: [2, 9],
                demon: {
                    frames: [10, 11],
                    speed: 0.2
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