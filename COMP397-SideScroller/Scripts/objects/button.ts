﻿/// <reference path="../constants.ts" />
/// <reference path="../managers/assets.ts" />

module objects {
    export class Button extends createjs.Sprite{
        // Constructor + + + + +
        constructor(x: number, y: number, buttonIDString: string) {
            super(assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners;
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }
        onButtonOut() {
            this.alpha = 1;
        }
    }
}