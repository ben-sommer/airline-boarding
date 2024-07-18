import { Sprite } from "./Sprite.js";
import { PIXEL_RATIO } from "./utils.js";

export class Canvas {
    constructor({ selector = "canvas", backgroundColor = "#ffffff" }) {
        /**
         * @type {HTMLCanvasElement}
         */
        this.canvas = document.querySelector(selector);

        if (!this.canvas) throw new Error("No canvas found");

        /**
         * @type {CanvasRenderingContext2D}
         */
        this.ctx = this.canvas.getContext("2d");

        /**
         * @type {Sprite[]}
         */
        this.sprites = [];

        this.width = this.canvas.width =
            this.canvas.getBoundingClientRect().width;
        this.height = this.canvas.height =
            this.canvas.getBoundingClientRect().height;

        this.canvas.width *= PIXEL_RATIO;
        this.canvas.height *= PIXEL_RATIO;

        this.ctx.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);

        this.draw();

        this.backgroundColor = backgroundColor;
    }

    addSprite(sprite) {
        sprite.setCtx(this.ctx);
        sprite.setCanvas(this);
        this.sprites.push(sprite);
        this.draw();
    }

    draw() {
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.width, this.height);

        for (const sprite of this.sprites) {
            sprite.draw();
        }
    }
}
