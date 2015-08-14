module states {
    export function levelBufferState() {
    }
    export function nextClicked(event: MouseEvent) {
        stage.removeChild(game);
        createjs.Sound.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        // reads previous state and sets next
        if (prevState == constants.PLAY1_STATE) {
            currentState = constants.PLAY2_STATE;
        }
        else if (prevState == constants.PLAY2_STATE) {
            currentState = constants.PLAY3_STATE;
        }
        else if (prevState == constants.PLAY3_STATE) {
            currentState = constants.MENU_STATE;
        }
        changeState(currentState);
    }

    export function levelBuffer() {
        // add music
        createjs.Sound.play("gameOverS", { "loop": -1, "volume": 0.4 });
        // declare new game containter
        game = new createjs.Container();
        // add horizon object to stage
        horizon = new objects.Horizon(assets.loader.getResult("gameOverScrn"));
        game.addChild(horizon);
        // sets titles and stats
        if (prevState == constants.PLAY1_STATE) {
            var titleLabel1 = new createjs.Text("LEVEL 1 COMPLETE!", "90px rockwell", "#4E0153");
            var titleLabel2 = new createjs.Text("LEVEL 1 COMPLETE!", "90px rockwell", "#3B1D8D");
            var scoreLabel1 = new createjs.Text("LEVEL SCORE!", "60px rockwell", "#4E0153");
            var scoreLabel2 = new createjs.Text("LEVEL SCORE!", "60px rockwell", "#3B1D8D");
            var score1 = new createjs.Text(scoreboard.score.toString(), "150px Brush Script MT", "#D22A07");
            var score2 = new createjs.Text(scoreboard.score.toString(), "150px Brush Script MT", "#D2B007");
            // titleLabel position
            titleLabel1.x = 74;
            titleLabel1.y = 83;
            game.addChild(titleLabel1);
            titleLabel2.x = 70;
            titleLabel2.y = 80;
            game.addChild(titleLabel2);
            // FScoreLabel position
            scoreLabel1.x = 104;
            scoreLabel1.y = 233;
            game.addChild(scoreLabel1);
            scoreLabel2.x = 100;
            scoreLabel2.y = 230;
            game.addChild(scoreLabel2);
            // score position
            score1.x = 224;
            score1.y = 303;
            game.addChild(score1);
            score2.x = 220;
            score2.y = 300;
            game.addChild(score2);
            // display try again button
            tryAgain = new objects.Button(800, 400, "nextBtn");
            game.addChild(tryAgain);
        }
        else if (prevState == constants.PLAY2_STATE) {
            // title
            var titleLabel1 = new createjs.Text("LEVEL 2 COMPLETE!", "90px rockwell", "#4E0153");
            var titleLabel2 = new createjs.Text("LEVEL 2 COMPLETE!", "90px rockwell", "#3B1D8D");
            // level score
            var scoreLabel1 = new createjs.Text("LEVEL SCORE!", "60px rockwell", "#4E0153");
            var scoreLabel2 = new createjs.Text("LEVEL SCORE!", "60px rockwell", "#3B1D8D");
            var score1 = new createjs.Text(scoreboard.score.toString(), "100px Brush Script MT", "#D22A07");
            var score2 = new createjs.Text(scoreboard.score.toString(), "100px Brush Script MT", "#D2B007");
            // total score
            var tScoreLabel1 = new createjs.Text("TOTAL SCORE!", "60px rockwell", "#4E0153");
            var tScoreLabel2 = new createjs.Text("TOTAL SCORE!", "60px rockwell", "#3B1D8D");
            var tScore1 = new createjs.Text(constants.FINAL_SCORE.toString(), "150px Brush Script MT", "#D22A07");
            var tScore2 = new createjs.Text(constants.FINAL_SCORE.toString(), "150px Brush Script MT", "#D2B007");

            // titleLabel position
            titleLabel1.x = 64;
            titleLabel1.y = 83;
            game.addChild(titleLabel1);
            titleLabel2.x = 60;
            titleLabel2.y = 80;
            game.addChild(titleLabel2);
            // ScoreLabel position
            scoreLabel1.x = 104;
            scoreLabel1.y = 203;
            game.addChild(scoreLabel1);
            scoreLabel2.x = 100;
            scoreLabel2.y = 200;
            game.addChild(scoreLabel2);
            // score position
            score1.x = 554;
            score1.y = 183;
            game.addChild(score1);
            score2.x = 550;
            score2.y = 180;
            game.addChild(score2);
            // fScoreLabel position
            tScoreLabel1.x = 104;
            tScoreLabel1.y = 303;
            game.addChild(tScoreLabel1);
            tScoreLabel2.x = 100;
            tScoreLabel2.y = 300;
            game.addChild(tScoreLabel2);
            // fScore position
            tScore1.x = 224;
            tScore1.y = 363;
            game.addChild(tScore1);
            tScore2.x = 220;
            tScore2.y = 360;
            game.addChild(tScore2);
            // display try again button
            tryAgain = new objects.Button(800, 400, "nextBtn");
            game.addChild(tryAgain);
        }
        else if (prevState == constants.PLAY3_STATE) {
            var titleLabel1 = new createjs.Text("CONGRATULATIONS!", "90px rockwell", "#4E0153");
            var titleLabel2 = new createjs.Text("CONGRATULATIONS!", "90px rockwell", "#3B1D8D");
            var fScoreLabel1 = new createjs.Text("FINAL SCORE!", "60px rockwell", "#4E0153");
            var fScoreLabel2 = new createjs.Text("FINAL SCORE!", "60px rockwell", "#3B1D8D");
            var fScore1 = new createjs.Text(constants.FINAL_SCORE.toString(), "150px Brush Script MT", "#D22A07");
            var fScore2 = new createjs.Text(constants.FINAL_SCORE.toString(), "150px Brush Script MT", "#D2B007");
            // titleLabel position
            titleLabel1.x = 54;
            titleLabel1.y = 83;
            game.addChild(titleLabel1);
            titleLabel2.x = 50;
            titleLabel2.y = 80;
            game.addChild(titleLabel2);
            // FScoreLabel position
            fScoreLabel1.x = 104;
            fScoreLabel1.y = 233;
            game.addChild(fScoreLabel1);
            fScoreLabel2.x = 100;
            fScoreLabel2.y = 230;
            game.addChild(fScoreLabel2);
            // score position
            fScore1.x = 224;
            fScore1.y = 283;
            game.addChild(fScore1);
            fScore2.x = 220;
            fScore2.y = 280;
            game.addChild(fScore2);
            // display try again button
            tryAgain = new objects.Button(800, 400, "playBtn");
            game.addChild(tryAgain);
        }
        // show cursor
        stage.cursor = "default";
        // add mouse event listeners
        tryAgain.addEventListener("click", nextClicked);
        stage.addChild(game);
    }
}