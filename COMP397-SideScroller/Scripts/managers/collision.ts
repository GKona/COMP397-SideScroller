﻿module managers {
    export class Collision {
        // Public Methods + + + + +
        // Check the distance between plane and gameObject
        public check(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            p1.x = plane.x;
            p1.y = plane.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((plane.height) * 0.5 + (gameObject.height * 0.5))) {
                if (!gameObject.isColliding) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "cloud") {
                        scoreboard.lives--;
                    }
                    if (gameObject.name == "island") {
                        scoreboard.score += 100;
                        island.reset();
                        scoreboard.cnt++;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        }
    }
}