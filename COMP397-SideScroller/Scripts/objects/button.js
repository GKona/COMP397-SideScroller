/// <reference path="../constants.ts" />
/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        // Constructor + + + + +
        function Button(x, y, buttonIDString) {
            _super.call(this, assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners;
        }
        // event listener
        Button.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };
        // hover fade out
        Button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };
        // hover fade in
        Button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map