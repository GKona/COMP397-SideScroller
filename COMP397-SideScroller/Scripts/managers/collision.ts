module managers {
    export class Collision {
        private jetCrow: objects.JetCrow;
        private gold: objects.Gold;
        private demonS = [];
        private demonD = [];
        private demonW = [];
        private scoreboard: objects.ScoreBoard;
        private game: createjs.Container
                
        constructor(jetCrow: objects.JetCrow, gold: objects.Gold, demonDiags, demonStrts, demonWaves, scoreboard: objects.ScoreBoard, game: createjs.Container) {
            this.jetCrow = jetCrow;
            this.gold = gold;
            this.demonS = demonDiags;
            this.demonD = demonStrts;
            this.demonW = demonWaves;
            this.scoreboard = scoreboard;
            this.game = game;
        }
        
        public crowAndDemon(demon: objects.DemonStrt) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.4 + (demon.height * 0.4))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    scoreboard.lives--;
                    demon.reset();
                }
                demon.isColliding = true;
            } 
            else {
                demon.isColliding = false;
            }
        }

        /*
        public crowAndGold(object: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = object.x;
            p2.y = object.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.5 + (object.height * 0.5))) {
                if (!object.isColliding) {
                    createjs.Sound.play(object.sound);
                    scoreboard.score += 100;
                    scoreboard.cnt++;
                    object.reset();
                }
                object.isColliding = true;
            }
            else {
                object.isColliding = false;
            }
        }
        */
        
        public check(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;

            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.4 + (gameObject.height * 0.4))) {
                if (!gameObject.isColliding) {
                    createjs.Sound.play(gameObject.sound);
                        scoreboard.score += 100;
                        gold.reset();
                        scoreboard.cnt++;
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        }
        
        update() {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.crowAndDemon(this.demonD[count]);
            }
            this.check(gold);
        }
    }
}