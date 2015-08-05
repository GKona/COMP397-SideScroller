module states {
    export function gameOverState() {
        // displays background
        //ocean.update();
        //plane.update();
        //island.update();
    }
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        createjs.Sound.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function gameOver() {
        createjs.Sound.play("gameOverS", { "loop": -1, "volume": 0.4 });
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // declare new game containter
        game = new createjs.Container();
        var gameOverLabel1 = new createjs.Text("GAME OVER!", "80px rockwell", "#4E0153");
        var gameOverLabel2 = new createjs.Text("GAME OVER!", "80px rockwell", "#3B1D8D");
        var finalScoreLabel1 = new createjs.Text("FINAL SCORE!", "60px rockwell", "#4E0153");
        var finalScoreLabel2 = new createjs.Text("FINAL SCORE!", "60px rockwell", "#3B1D8D");
        var finalScore1 = new createjs.Text(scoreboard.score.toString(), "150px Brush Script MT", "#D22A07");
        var finalScore2 = new createjs.Text(scoreboard.score.toString(), "150px Brush Script MT", "#D2B007");

        ocean = new objects.Ocean(assets.loader.getResult("gameOverScrn"));
        game.addChild(ocean);

        // show cursor
        stage.cursor = "default";

        // display game over
        gameOverLabel1.x = 104;
        gameOverLabel1.y = 93;
        game.addChild(gameOverLabel1);
        gameOverLabel2.x = 100;
        gameOverLabel2.y = 90;
        game.addChild(gameOverLabel2);

        // display final score label
        finalScoreLabel1.x = 164;
        finalScoreLabel1.y = 178;
        game.addChild(finalScoreLabel1);
        finalScoreLabel2.x = 160;
        finalScoreLabel2.y = 175;
        game.addChild(finalScoreLabel2);

        // display final score
        finalScore1.x = 264;
        finalScore1.y = 253;
        game.addChild(finalScore1);
        finalScore2.x = 260;
        finalScore2.y = 250;
        game.addChild(finalScore2);

        // display try again button
        tryAgain = new objects.Button(800, 400, "retryBtn");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);
        
        stage.addChild(game);

    }
}