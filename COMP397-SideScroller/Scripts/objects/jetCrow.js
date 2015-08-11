var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // jetCrow Class + + + + +
    var JetCrow = (function (_super) {
        __extends(JetCrow, _super);
        // Constructor + + + + +
        function JetCrow(imageString) {
            _super.call(this, imageString);
            this.sound = "engine";
            this.x = 100;
            this.y = 250;
            createjs.Sound.play(this.sound, { "loop": -1, "volume": 0.4 });
        }
        // Public Methods + + + + +
        JetCrow.prototype.update = function () {
            if (stage.mouseY < 45) {
                this.y = 45;
            }
            else if (stage.mouseY > 480) {
                this.y = 480;
            }
            else if (stage.mouseY > 45 && stage.mouseY < 470) {
                this.y = stage.mouseY; // position jetCrow under mouse
            }
            if (stage.mouseX < 65) {
                this.x = 65;
            }
            else if (stage.mouseX > 900) {
                this.x = 900;
            }
            else if (stage.mouseX > 65 && stage.mouseX < 900) {
                this.x = stage.mouseX; // position jetCrow under mouse
            }
        };
        JetCrow.prototype.destroy = function () {
            // remove sound and sprite
            createjs.Sound.stop();
            game.removeChild(jetCrow);
        };
        return JetCrow;
    })(objects.GameObject);
    objects.JetCrow = JetCrow;
})(objects || (objects = {}));
//# sourceMappingURL=jetCrow.js.map