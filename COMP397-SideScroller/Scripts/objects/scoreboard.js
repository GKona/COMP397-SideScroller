var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // Constructor + + + + +
        function ScoreBoard() {
            // Public Properties
            this.score = 0;
            this.finalScore = 0;
            this.lives = constants.CROW_LIVES;
            this.cnt = 0;
            this.mins = 1;
            this.secs = 60;
            this.livesLabel1 = new createjs.Text("Lives:", "28px Consolas", "#042036");
            this.livesLabel2 = new createjs.Text("Lives:", "28px Consolas", "#708DA4");
            this.scoreLabel1 = new createjs.Text("Score:", "28px Consolas", "#042036");
            this.scoreLabel2 = new createjs.Text("Score:", "28px Consolas", "#708DA4");
            this.timerLabel1 = new createjs.Text("Time:", "28px Consolas", "#042036");
            this.timerLabel2 = new createjs.Text("Time:", "28px Consolas", "#708DA4");
            game.addChild(this.livesLabel1);
            game.addChild(this.livesLabel2);
            game.addChild(this.scoreLabel1);
            game.addChild(this.scoreLabel2);
            game.addChild(this.timerLabel1);
            game.addChild(this.timerLabel2);
        }
        // Public Methods + + + + +
        ScoreBoard.prototype.update = function () {
            // lives counter
            this.livesLabel1.text = "Lives: " + this.lives;
            this.livesLabel1.x = 12;
            this.livesLabel1.y = 519;
            this.livesLabel2.text = "Lives: " + this.lives;
            this.livesLabel2.x = 10;
            this.livesLabel2.y = 518;
            // score counter
            this.scoreLabel1.text = "Score: " + this.score;
            this.scoreLabel1.x = 202;
            this.scoreLabel1.y = 519;
            this.scoreLabel2.text = "Score: " + this.score;
            this.scoreLabel2.x = 200;
            this.scoreLabel2.y = 518;
            //timer
            if (this.mins > 0) {
                this.timerLabel1.text = "Time: " + "0" + this.mins + ":00";
                this.timerLabel2.text = "Time: " + "0" + this.mins + ":00";
            }
            else if (this.mins == 0) {
                this.timerLabel1.text = "Time: " + "0" + this.mins + ":" + this.secs;
                this.timerLabel2.text = "Time: " + "0" + this.mins + ":" + this.secs;
            }
            this.timerLabel1.x = 402;
            this.timerLabel1.y = 519;
            this.timerLabel2.x = 400;
            this.timerLabel2.y = 518;
            // 1up counter
            if (this.cnt == 15) {
                this.cnt = 0;
                this.lives++;
                createjs.Sound.play("oneUp", { "volume": 0.4 });
            }
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map