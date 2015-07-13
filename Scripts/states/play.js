var states;
(function (states) {
    function playState() {
        ocean.update();
        plane.update();
        island.update();
        for (var cloud = 0; cloud < constants.CLOUD_NUM; cloud++) {
            clouds[cloud].update();
            collision.check(clouds[cloud]);
        }
        collision.check(island);
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
    function play() {
        // Instantiate new game container
        game = new createjs.Container();
        // Add ocean object to stage
        ocean = new objects.Ocean(assets.loader.getResult("city"));
        game.addChild(ocean);
        // Add island object to stage
        island = new objects.Island("coin");
        game.addChild(island);
        // Add plane object to stage
        plane = new objects.Plane("crow");
        game.addChild(plane);
        // Add cloud objects to stage
        for (var cloud = 0; cloud < constants.CLOUD_NUM; cloud++) {
            clouds[cloud] = new objects.Cloud("demon");
            game.addChild(clouds[cloud]);
        }
        // add scoreboard
        scoreboard = new objects.ScoreBoard;
        // add collision manager
        collision = new managers.Collision;
        // add game container to stage
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map