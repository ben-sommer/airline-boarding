import { Sprite } from "./Sprite.js";

export class SeatSprite extends Sprite {
    constructor(params) {
        super(params);
    }

    draw() {
        this.canvas.ctx.strokeStyle = "#000000";
        this.canvas.ctx.strokeRect(this._x, this._y, this._width, this._height);
    }
}
