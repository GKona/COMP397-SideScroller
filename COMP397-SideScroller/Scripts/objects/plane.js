var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Plane Class + + + + +
    var Plane = (function (_super) {
        __extends(Plane, _super);
        // Constructor + + + + +
        function Plane(imageString) {
            _super.call(this, imageString);
            this.sound = "engine";
            this.sound2 = "playS";
            this.x = 100;
            this.y = 250;
            createjs.Sound.play(this.sound, { "loop": -1, "volume": 0.4 });
            createjs.Sound.play(this.sound2, { "loop": -1, "volume": 0.2 });
        }
        // Public Methods + + + + +
        Plane.prototype.update = function () {
            if (stage.mouseY < 45) {
                this.y = 45;
            }
            else if (stage.mouseY > 480) {
                this.y = 480;
            }
            else if (stage.mouseY > 45 && stage.mouseY < 470) {
                this.y = stage.mouseY; // position plane under mouse
            }
        };
        Plane.prototype.destroy = function () {
            // remove sound and sprite
            createjs.Sound.stop();
            game.removeChild(plane);
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map