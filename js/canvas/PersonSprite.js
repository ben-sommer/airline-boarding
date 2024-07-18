import { Sprite } from "./Sprite.js";

const cells = window.cells;
const queue = window.queue;

export class PersonSprite extends Sprite {
    constructor(params) {
        super(params);

        const { row, col } = params;

        this._row = row;
        this._col = col;
    }

    get row() {
        return this._row;
    }

    get col() {
        return this._col;
    }

    tick() {
        const queueIndex = queue.findIndex(
            ({ current }) => current?.id == this.id
        );

        if (queueIndex && queueIndex == 0) {
            if (cells[])
        }
    }
}
