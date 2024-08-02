import { convToCanvasLocation, convToGridLocation } from "../simulation/utils.js";
import { Sprite } from "./Sprite.js";
const cells = window.cells;
const queue = window.queue;

export class PersonSprite extends Sprite {
    constructor(params) {
        super(params);

        const { row, col } = params;

        this._row = row;
        this._col = col;
        this._curRow = null;
        this._curCol = null;
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
            // spaqn mechanics
            if (!cells[0][window.halfWidth]) {
                cells[0][window.halfWidth] = { current: this, incoming: null }; //needs to be changes to be animatable
                this._curRow = 0;
                this._curCol = window.halfWidth;
            }
        }
        if (this._x < convToCanvasLocation(this._row, this._col).x) {
            this._x += 1;
        } else if (this._x > convToCanvasLocation(this._row, this._col).x) {
            this._x -= 1;
        } else {
            if (this._y < convToCanvasLocation(this._row, this._col).y) {
                this._y += 1;
            } else if (this._y > convToCanvasLocation(this._row, this._col).y) {
                this._y -= 1;
            }
        }
        if (convToGridLocation(this._x, this._y) != [this._curRow, this._curCol]) { 
            cells[this._curRow][this._curCol] = { current: null, incoming: null };
            this._curRow = convToGridLocation(this._x, this._y)[0];
            this._curCol = convToGridLocation(this._x, this._y)[1];
            cells[this._curRow][this._curCol] = { current: this, incoming: null
        }
    }
}
