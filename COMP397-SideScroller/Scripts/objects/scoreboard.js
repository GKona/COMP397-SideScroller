var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // Constructor + + + + +
        function ScoreBoard() {
            // Public Properties
            this.score = 0;
            this.lives = constants.PLANE_LIVES;
            this.livesLabel1 = new createjs.Text("Lives:", "40px Consolas", "#000000");
            this.livesLabel2 = new createjs.Text("Lives:", "40px Consolas", "#FF0000");
            this.scoreLabel1 = new createjs.Text("Score:", "40px Consolas", "#000000");
            this.scoreLabel2 = new createjs.Text("Score:", "40px Consolas", "#FF0000");
            game.addChild(this.livesLabel1);
            game.addChild(this.livesLabel2);
            game.addChild(this.scoreLabel1);
            game.addChild(this.scoreLabel2);
        }
        // Public Methods + + + + +
        ScoreBoard.prototype.update = function () {
            this.livesLabel1.text = "Lives: " + this.lives;
            this.livesLabel1.x = 12;
            this.livesLabel1.y = 2;
            this.livesLabel2.text = "Lives: " + this.lives;
            this.livesLabel2.x = 10;
            this.scoreLabel1.text = "Score: " + this.score;
            this.scoreLabel1.x = 362;
            this.scoreLabel1.y = 2;
            this.scoreLabel2.text = "Score: " + this.score;
            this.scoreLabel2.x = 360;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map