﻿/// <reference path="../objects/jetcrow.ts" />
/// <reference path="../objects/bullet.ts" />
 
module managers {
    export class BulletM {
        game: createjs.Container;
        jetCrow: objects.JetCrow;
        bullets = [];
        bulletCnt: number = 0;
        firing: boolean = false;
        constructor(jetCrow: objects.JetCrow, game: createjs.Container) {
            this.game = game;
            this.jetCrow = jetCrow;
        }

        fire() {
            // create a bullet in front of the jetcrow
            var centerB: objects.Bullet = new objects.Bullet(this.game);
            this.game.addChild(centerB);
            centerB.x = this.jetCrow.x + 60;
            centerB.y = this.jetCrow.y + 20;
            this.bullets.push(centerB);

            // Play bullet sound
            createjs.Sound.play("bill");
        }

        update() {
            var len: number = this.bullets.length;
            var bullet: objects.Bullet;

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
        }

        destroyBullet(bullet: objects.Bullet) {
            var len: number = this.bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet); {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        }
    }
}