module states {
    export function menuState() {
    // display background
        ocean.update();
        plane.update();
    }
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren()
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    export function Menu() {
        var gameNameLabel: objects.Label;

        // Declare new game container
        game = new createjs.Container();

        // Show cursor
        stage.cursor = "default";

        // Display Game Title
        gameNameLabel = new objects.Label(200, 40, "Desert Runner");
        game.addChild(gameNameLabel);

        // Display Play Button
        playButton = new objects.Button(200, 300, "Start Game");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);

    }
}