module states {
    export function playState2() {
        horizon.update();
        jetCrow.update();
        gold.update();
        pirate.update();
        bulletM.update();
        collision.update();
        scoreboard.update();
        // updates every instance of enemy array
        for (var demonDiag = 0; demonDiag < constants.CLOUD_NUM; demonDiag++) {
            demonDiags[demonDiag].update();
        }
        // gameover when lives reach 0
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            jetCrow.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    // fires bullet on button press
    function mouseDown() {
        bulletM.firing = true;
        setTimeout(function (e) {
            bulletM.firing = false;
        }, 200);
    }
    // stops firing on button release
    /*
    function mouseUp() {
        setTimeout(function (e) {
            bulletM.firing = false;
        }, 40);
    }
    */
    export function play2() {
        // adjusts number of enemies of level
        constants.CLOUD_NUM = 10;
        // resets score multiplier
        scoreboard.mult = 1;
        // instantiate new game container
        game = new createjs.Container();
        // hide cursor
        stage.cursor = "none";
        // add music
        createjs.Sound.play("playS", { "loop": -1, "volume": 0.1 });
        // add horizon object to stage
        horizon = new objects.Horizon(assets.loader.getResult("cityP"));
        game.addChild(horizon);
        // add gold object to stage
        gold = new objects.Gold("coin");
        game.addChild(gold);
        // add pirate object to stage
        pirate = new objects.PirateCoin("pirateCoin");
        game.addChild(pirate);
        // add jetCrow object to stage
        jetCrow = new objects.JetCrow("crow");
        game.addChild(jetCrow);
        // add demonDiag objects to stage
        for (var demonDiag = 0; demonDiag < constants.CLOUD_NUM; demonDiag++) {
            demonDiags[demonDiag] = new objects.DemonDiag("demon");
            game.addChild(demonDiags[demonDiag]);
        }
        // add scoreboard
        scoreboard = new objects.ScoreBoard;
        // add bullet manager
        bulletM = new managers.BulletM(jetCrow, game);
        // add collision manager
        collision = new managers.Collision(jetCrow, gold, pirate, demonDiags, demonStrts, demonWaves, scoreboard, game, bulletM.bullets);
        // add mouse event listener
        game.addEventListener("mousedown", mouseDown);
        //game.addEventListener("pressup", mouseUp);
        // add game container to stage
        stage.addChild(game);
        // level timer
        setTimeout(function (e) {
            constants.FINAL_SCORE += scoreboard.score;
            stage.removeChild(game);
            jetCrow.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            prevState = constants.PLAY2_STATE;
            currentState = constants.LEVEL_BUFFER;
            changeState(currentState);
        }, 60000);
        // minute counter
        var minsInter = setInterval(function (e) {
            scoreboard.mins--;
            if (scoreboard.mins < 1) {
                clearInterval(minsInter);
            }
        }, 1000);
        // second counter
        var secsInter = setInterval(function (e) {
            scoreboard.secs--;
            if (scoreboard.mins > 0) {
                clearInterval(secsInter);
            }
        }, 1000);  
    }
}
