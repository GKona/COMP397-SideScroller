var states;
(function (states) {
    function menuState() {
    }
    states.menuState = menuState;
    function playButtonClicked(event) {
        stage.removeChild(game);
        createjs.Sound.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function menu() {
        createjs.Sound.play("menuS", { "loop": -1, "volume": 0.4 });
        var gameNameLabel1 = new createjs.Text("Jet-Crow", "80px papyrus", "#5A004F");
        var gameNameLabel2 = new createjs.Text("Jet-Crow", "80px papyrus", "#053860");
        // Declare new game container
        game = new createjs.Container();
        ocean = new objects.Ocean(assets.loader.getResult("menuScrn"));
        game.addChild(ocean);
        // Show cursor
        stage.cursor = "default";
        // Display Game Title
        gameNameLabel1.x = 50;
        gameNameLabel1.y = 0;
        game.addChild(gameNameLabel1);
        gameNameLabel2.x = 51;
        gameNameLabel2.y = 1;
        game.addChild(gameNameLabel2);
        // Display Play Button
        playButton = new objects.Button(800, 400, "playBtn");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map