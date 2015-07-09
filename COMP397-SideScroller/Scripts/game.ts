/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />
/// <reference path="managers/assets.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />

/// <reference path="objects/scoreboard.ts" />

/// <reference path="managers/collision.ts" />

// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

// Game Variables
var ocean: objects.Ocean;
var plane: objects.Plane;
var island: objects.Island;
var clouds: objects.Cloud[] = [];  
var scoreboard: objects.ScoreBoard;

// Game Managers
var assets: managers.Asset;
var collision: managers.Collision;

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

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    ocean.update();
    plane.update();
    island.update();
    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud].update();
        collision.check(clouds[cloud]);
    }
    collision.check(island);
    scoreboard.update();
    stage.update();

    stats.end(); // end measuring
}

// Our Main Game Function
function main() {
    // Add ocean object to stage
    ocean = new objects.Ocean(assets.loader.getResult("ocean"));
    stage.addChild(ocean);
    // Add island object to stage
    island = new objects.Island("island");
    stage.addChild(island);
    // Add plane object to stage
    plane = new objects.Plane("plane");
    stage.addChild(plane);
    // Add cloud objects to stage
    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud] = new objects.Cloud("cloud");
        stage.addChild(clouds[cloud]);
    }
    // add scoreboard
    scoreboard = new objects.ScoreBoard;
    // add collision manager
    collision = new managers.Collision;
}