module states {
    export function gameOverState() {
        // displays background
    }
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // declare new game containter
        game = new createjs.Container();

        ocean = new objects.Ocean(assets.loader.getResult("gameOverScrn"));
        game.addChild(ocean);

        // show cursor
        stage.cursor = "default";

        // display game over
        gameOverLabel = new objects.Label(200, 40, "GAME OVER!");
        game.addChild(gameOverLabel);

        // display final score label
        finalScoreLabel = new objects.Label(200, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // display final score
        finalScore = new objects.Label(200, 160, scoreboard.score.toString());
        game.addChild(finalScore);
        /*
        // display try again button
        tryAgain = new objects.Button(200, 300, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);
        */
        stage.addChild(game);

    }
}