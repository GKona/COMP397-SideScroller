/// <reference path="../objects/jetcrow.ts" />
/// <reference path="../objects/bullet.ts" />
var managers;
(function (managers) {
    var BulletM = (function () {
        function BulletM(jetCrow, game) {
            this.bullets = [];
            this.bulletCnt = 0;
            this.firing = false;
            this.game = game;
            this.jetCrow = jetCrow;
        }
        BulletM.prototype.fire = function () {
            // create a bullet in front of the jetcrow
            var centerB = new objects.Bullet(this.game);
            this.game.addChild(centerB);
            centerB.x = this.jetCrow.x + 60;
            centerB.y = this.jetCrow.y + 20;
            this.bullets.push(centerB);
            // Play bullet sound
            createjs.Sound.play("bill");
        };
        BulletM.prototype.update = function () {
            var len = this.bullets.length;
            var bullet;
            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];
                // move current bullet right of stage
                bullet.x += 15;
                // check to see if the bullet has left the stage
                if (bullet.x > 1000) {
                    this.destroyBullet(bullet);
                }
            }
            // fire bullet if mouse button is clicked or game container is tapped
            if ((this.firing == true) && (this.bulletCnt % 10 == 0)) {
                this.fire();
            }
            // increment bullet count to limit number of bullets being fired
            this.bulletCnt++;
        };
        BulletM.prototype.destroyBullet = function (bullet) {
            var len = this.bullets.length;
            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet)
                    ;
                {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        };
        return BulletM;
    })();
    managers.BulletM = BulletM;
})(managers || (managers = {}));
//# sourceMappingURL=bulletM.js.map