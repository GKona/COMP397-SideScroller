/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/horizon.ts" />
/// <reference path="objects/jetCrow.ts" />
/// <reference path="objects/gold.ts" />
/// <reference path="objects/piratecoin.ts" />
/// <reference path="objects/demonDiag.ts" />
/// <reference path="objects/demonStrt.ts" />
/// <reference path="objects/demonWave.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/bulletm.ts" />
/// <reference path="states/play1.ts" />
/// <reference path="states/play2.ts" />
/// <reference path="states/play3.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/levelbuffer.ts" />
/// <reference path="states/gameover.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var game;
// Game Variables
var horizon;
var jetCrow;
var gold;
var pirate;
var demonDiags = [];
var demonStrts = [];
var demonWaves = [];
var scoreboard;
// Game Managers
var assets;
var collision;
var bulletM;
// Buttons
var tryAgain;
var playButton;
// State manager
var prevState;
var currentState;
var currentStateFunction;
// Preloader Function
function preload() {
    // instantiate asset manager class
    assets = new managers.Asset();
    // setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    optimizeForMobile();
    // calling main game function
    currentState = constants.MENU_STATE;
    changeState(currentState);
    //main();
}
// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '1010px';
    stats.domElement.style.top = '8px';
    //document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    currentStateFunction();
    stage.update();
    stats.end(); // end measuring
}
function changeState(state) {
    // Launch Various "Screens"
    switch (state) {
        case constants.MENU_STATE:
            // Instatiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY1_STATE:
            // instantiate play screen
            currentStateFunction = states.playState1;
            states.play1();
            break;
        case constants.PLAY2_STATE:
            // instantiate play screen
            currentStateFunction = states.playState2;
            states.play2();
            break;
        case constants.PLAY3_STATE:
            // instantiate play screen
            currentStateFunction = states.playState3;
            states.play3();
            break;
        case constants.LEVEL_BUFFER:
            // instantiate game over screen
            currentStateFunction = states.levelBufferState;
            states.levelBuffer();
            break;
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            currentStateFunction = states.gameOverState;
            states.gameOver();
            break;
    }
}
//# sourceMappingURL=game.js.map