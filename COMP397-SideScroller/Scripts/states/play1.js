var states;
(function (states) {
    function playState1(gameObject) {
        horizon.update();
        jetCrow.update();
        gold.update();
        for (var demonStrt = 0; demonStrt < constants.CLOUD_NUM; demonStrt++) {
            demonStrts[demonStrt].update();
        }
        collision.update();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            jetCrow.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        /*
        if (scoreboard.score >= 100) {
            scoreboard.finalScore += scoreboard.score;
            stage.removeChild(game);
            jetCrow.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY2_STATE;
            changeState(currentState);
        }
        */
    }
    states.playState1 = playState1;
    function play1() {
        // Instantiate new game container
        game = new createjs.Container();
        // Add horizon object to stage
        horizon = new objects.Horizon(assets.loader.getResult("cityB"));
        game.addChild(horizon);
        // Add gold object to stage
        gold = new objects.Gold("coin");
        game.addChild(gold);
        // Add jetCrow object to stage
        jetCrow = new objects.JetCrow("crow");
        game.addChild(jetCrow);
        // Add demonStrt objects to stage
        for (var demonStrt = 0; demonStrt < constants.CLOUD_NUM; demonStrt++) {
            demonStrts[demonStrt] = new objects.DemonStrt("demon");
            game.addChild(demonStrts[demonStrt]);
        }
        // add scoreboard
        scoreboard = new objects.ScoreBoard;
        // add collision manager
        //collision = new managers.Collision;
        collision = new managers.Collision(jetCrow, gold, demonDiags, demonStrts, demonWaves, scoreboard, game);
        // add game container to stage
        stage.addChild(game);
    }
    states.play1 = play1;
})(states || (states = {}));
//# sourceMappingURL=play1.js.map