module states {
    export function playState2() {
        horizon.update();
        jetCrow.update();
        gold.update();

        for (var demonDiag = 0; demonDiag < constants.CLOUD_NUM; demonDiag++) {
            demonDiags[demonDiag].update();
            //collision.check(demonDiags[demonDiag]);
        }
        
        //collision.check(gold);
        scoreboard.update();
        
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            jetCrow.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        
        if (scoreboard.score >= 200) {
            scoreboard.finalScore += scoreboard.score;
            stage.removeChild(game);
            jetCrow.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY3_STATE;
            changeState(currentState);
        }

    }
    export function play2() {
        // Instantiate new game container
        game = new createjs.Container();
        // Add horizon object to stage
        horizon = new objects.Horizon(assets.loader.getResult("cityP"));
        game.addChild(horizon);
        // Add gold object to stage
        gold = new objects.Gold("coin");
        game.addChild(gold);
        // Add jetCrow object to stage
        jetCrow = new objects.JetCrow("crow");
        game.addChild(jetCrow);
        // Add demonDiag objects to stage
        for (var demonDiag = 0; demonDiag < constants.CLOUD_NUM; demonDiag++) {
            demonDiags[demonDiag] = new objects.DemonDiag("demon");
            game.addChild(demonDiags[demonDiag]);
        }
        // add scoreboard
        scoreboard = new objects.ScoreBoard;
        // add collision manager
        //collision = new managers.Collision;

        // add game container to stage
        stage.addChild(game);
    }
}
