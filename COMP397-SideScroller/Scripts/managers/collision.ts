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

        constructor(jetCrow: objects.JetCrow, gold: objects.Gold, pirate: objects.PirateCoin, demonDiags, demonStrts, demonWaves, scoreboard: objects.ScoreBoard, game: createjs.Container, bullets?) {
            this.jetCrow = jetCrow;
            this.gold = gold;
            this.demonD = demonDiags;
            this.demonS = demonStrts;
            this.demonW = demonWaves;
            this.bullets = bullets;
            this.scoreboard = scoreboard;
            this.game = game;
        }
        // crow & demonStrt collision
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
                    scoreboard.mult = 1;
                    scoreboard.multCnt = 0;;
                    demon.reset();
                }
                demon.isColliding = true;
            } 
            else {
                demon.isColliding = false;
            }
        }
        // crow & demonDiag collision
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
                    scoreboard.mult = 1;
                    scoreboard.multCnt = 0;;
                    demon.reset();
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        // crow & demonWave collision
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
                    scoreboard.mult = 1;
                    scoreboard.multCnt = 0;;
                    demon.reset();
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        // bullet & demonStrt collision
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
                    scoreboard.score += 10 * scoreboard.mult;
                    scoreboard.multCnt++;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        // bullet & demonDiag collision
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
                    scoreboard.score += 10 * scoreboard.mult;
                    scoreboard.multCnt++;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        // bullet & demonWave collision
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
                    scoreboard.score += 10 * scoreboard.mult;
                    scoreboard.multCnt++;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        }
        // crow & gold collision
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
        // crow & pirateCoin collision
        public crowAndPirate(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.4 + (gameObject.height * 0.4))) {
                if (!gameObject.isColliding) {
                    createjs.Sound.play(gameObject.sound);
                    if (scoreboard.score > 99) {
                        scoreboard.score -= 100;
                    }
                    if (scoreboard.score < 100) {
                        scoreboard.score = 0;
                    }
                    pirate.reset();
                    scoreboard.cnt = 0;
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        }

        update() {
            this.crowAndGold(gold);
            this.crowAndPirate(pirate);
            // play state 1 collisions
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
            // play state 2 collisions
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
            // play state 3 collisions
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