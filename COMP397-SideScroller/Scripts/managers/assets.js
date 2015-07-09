var managers;
(function (managers) {
    var Asset = (function () {
        // Constructor + + + + +
        function Asset() {
            // Private Properties
            this.manifest = [
                { id: "ocean", src: "assets/images/ocean.gif" },
                { id: "yay", src: "assets/audio/yay.ogg" },
                { id: "thunder", src: "assets/audio/thunder.ogg" },
                { id: "engine", src: "assets/audio/engine.ogg" }
            ];
            this.data = {
                "images": [
                    "assets/images/atlas.png"
                ],
                "frames": [
                    [2, 2, 226, 176, 0, 0, -1],
                    [2, 180, 62, 60, 0, 0, -1],
                    [66, 180, 61, 49, 0, -4, -10]
                ],
                "animations": {
                    "cloud": [0],
                    "island": [1],
                    "plane": [2]
                }
            };
            this.preload();
        }
        Asset.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            // create texture atlas
            this.atlas = new createjs.SpriteSheet(this.data);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map