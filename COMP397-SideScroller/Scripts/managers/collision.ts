module managers {
    export class Collision {
        private jetCrow: objects.JetCrow;
        private gold: objects.Gold;
        private demonS = [];
        private demonD = [];
        private demonW = [];
        private bullets = [];
        private scoreboard: objects.ScoreBoard;
        private game: createjs.Container;


        constructor(jetCrow: objects.JetCrow, gold: objects.Gold, demonDiags, demonStrts, demonWaves, scoreboard: objects.ScoreBoard, game: createjs.Container, bullets?) {
            this.jetCrow = jetCrow;
            this.gold = gold;
            this.demonD = demonDiags;
            this.demonS = demonStrts;
            this.demonW = demonWaves;
            this.bullets = bullets;
            this.scoreboard = scoreboard;
            this.game = game;
        }
        
        public crowAndDemon1(demon: objects.DemonStrt) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.35 + (demon.height * 0.35))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    scoreboard.lives--;
                    demon.reset();
                }
                demon.isColliding = true;
            } 
            else {
                demon.isColliding = false;
            }
        }
        
        public crowAndDemon2(demon: objects.DemonDiag) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.35 + (demon.height * 0.35))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    scoreboard.lives--;
                    demon.reset();
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        
        public crowAndDemon3(demon: objects.DemonWave) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.35 + (demon.height * 0.35))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    scoreboard.lives--;
                    demon.reset();
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        
        public crowAndGold(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;

            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.4 + (gameObject.height * 0.4))) {
                if (!gameObject.isColliding) {
                    createjs.Sound.play(gameObject.sound);
                        scoreboard.score += 50;
                        gold.reset();
                        scoreboard.cnt++;
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        }
        
        public bulletAndDemon1(bullet: objects.Bullet, demon: objects.DemonStrt) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((bullet.height) * 0.5 + (demon.height * 0.5))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    demon.reset();
                    scoreboard.score += 10;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }

        public bulletAndDemon2(bullet: objects.Bullet, demon: objects.DemonDiag) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((bullet.height) * 0.5 + (demon.height * 0.5))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    demon.reset();
                    scoreboard.score += 10;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        
        public bulletAndDemon3(bullet: objects.Bullet, demon: objects.DemonWave) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((bullet.height) * 0.5 + (demon.height * 0.5))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    demon.reset();
                    scoreboard.score += 10;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        
        update() {
            this.crowAndGold(gold);

            var len: number = this.bullets.length;
            if (currentState == constants.PLAY1_STATE) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.crowAndDemon1(this.demonS[count]);
                }

                for (var count = 0; count < len; count++) {
                    for (var countd = 0; countd < constants.CLOUD_NUM; countd++) {
                        this.bulletAndDemon1(this.bullets[count], this.demonS[countd]);
                    }
                }
            }
            else if (currentState == constants.PLAY2_STATE) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.crowAndDemon2(this.demonD[count]);
                }

                for (var count = 0; count < len; count++) {
                    for (var countd = 0; countd < constants.CLOUD_NUM; countd++) {
                        this.bulletAndDemon2(this.bullets[count], this.demonD[countd]);
                    }
                }
            }
            
            else if (currentState == constants.PLAY3_STATE) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.crowAndDemon3(this.demonW[count]);
                }

                for (var count = 0; count < len; count++) {
                    for (var countd = 0; countd < constants.CLOUD_NUM; countd++) {
                        this.bulletAndDemon3(this.bullets[count], this.demonW[countd]);
                    }
                }
            }
            
        }
    }
}