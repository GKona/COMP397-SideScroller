var states;
(function (states) {
    function playState3(gameObject) {
        horizon.update();
        jetCrow.update();
        gold.update();
        for (var demonWave = 0; demonWave < constants.CLOUD_NUM; demonWave++) {
            demonWaves[demonWave].update();
        }
        bulletM.update();
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
        if (scoreboard.score >= 200) {
            constants.FINAL_SCORE += scoreboard.score;
            stage.removeChild(game);
            jetCrow.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            prevState = constants.PLAY3_STATE;
            currentState = constants.LEVEL_BUFFER;
            changeState(currentState);
        }
    }
    states.playState3 = playState3;
    function mouseDown() {
        bulletM.firing = true;
        setTimeout(function (e) {
            bulletM.firing = false;
        }, 200);
    }
    function mouseUp() {
        setTimeout(function (e) {
            bulletM.firing = false;
        }, 40);
    }
    function play3() {
        constants.CLOUD_NUM = 15;
        // Instantiate new game container
        game = new createjs.Container();
        // remove cursor
        stage.cursor = "none";
        //add music
        createjs.Sound.play("playS", { "loop": -1, "volume": 0.1 });
        // Add horizon object to stage
        horizon = new objects.Horizon(assets.loader.getResult("city"));
        game.addChild(horizon);
        // Add gold object to stage
        gold = new objects.Gold("coin");
        game.addChild(gold);
        // Add jetCrow object to stage
        jetCrow = new objects.JetCrow("crow");
        game.addChild(jetCrow);
        // Add demonWave objects to stage
        for (var demonWave = 0; demonWave < constants.CLOUD_NUM; demonWave++) {
            demonWaves[demonWave] = new objects.DemonWave("demon");
            game.addChild(demonWaves[demonWave]);
        }
        // add scoreboard
        scoreboard = new objects.ScoreBoard;
        // add bullet manager
        bulletM = new managers.BulletM(jetCrow, game);
        // add collision manager
        collision = new managers.Collision(jetCrow, gold, demonDiags, demonStrts, demonWaves, scoreboard, game, bulletM.bullets);
        game.addEventListener("mousedown", mouseDown);
        game.addEventListener("pressup", mouseUp);
        // add game container to stage
        stage.addChild(game);
    }
    states.play3 = play3;
})(states || (states = {}));
//# sourceMappingURL=play3.js.map