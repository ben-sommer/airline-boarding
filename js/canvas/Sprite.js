import { uuid } from "./utils.js";

export class Sprite {
    constructor({ x, y, width, height, color, row, col }) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
        this.id = uuid();
        this._row = row;
        this._col = col;
    }

    setCanvas(canvas) {
        this.canvas = canvas;
    }

    setCtx(ctx) {
        this.ctx = ctx;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
        this.canvas.draw();
        this.bringToFront();
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
        this.canvas.draw();
        this.bringToFront();
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
        this.canvas.draw();
        this.bringToFront();
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
        this.canvas.draw();
        this.bringToFront();
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
        this.canvas.draw();
        this.bringToFront();
    }

    bringToFront() {
        this.canvas.sprites = [
            ...this.canvas.sprites.filter((sprite) => sprite.id !== this.id),
            this,
        ];
    }

    draw() {
        this.canvas.ctx.fillStyle = this._color;
        this.canvas.ctx.fillRect(this._x, this._y, this._width, this._height);
    }
}
