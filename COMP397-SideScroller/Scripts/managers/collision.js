var managers;
(function (managers) {
    var Collision = (function () {
        function Collision(jetCrow, gold, demonDiags, demonStrts, demonWaves, scoreboard, game, bullets) {
            this.demonS = [];
            this.demonD = [];
            this.demonW = [];
            this.bullets = [];
            this.jetCrow = jetCrow;
            this.gold = gold;
            this.demonD = demonDiags;
            this.demonS = demonStrts;
            this.demonW = demonWaves;
            this.bullets = bullets;
            this.scoreboard = scoreboard;
            this.game = game;
        }
        Collision.prototype.crowAndDemon = function (demon) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
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
        };
        Collision.prototype.crowAndGold = function (gameObject) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
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
        };
        Collision.prototype.bulletAndDemon = function (bullet, demon) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        };
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.crowAndDemon(this.demonS[count]);
            }
            this.crowAndGold(gold);
            var len = this.bullets.length;
            for (var countb = 0; countb < len; countb++) {
                for (var countd = 0; countd < constants.CLOUD_NUM; countd++) {
                    this.bulletAndDemon(this.bullets[countb], this.demonS[countd]);
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map