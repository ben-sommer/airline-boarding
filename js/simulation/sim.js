import { Canvas } from "../canvas/Canvas.js";
import { fullyRandom } from "./systems.js";
import { initialise } from "./utils.js";

const canvas = new Canvas({ selector: "#canvas", backgroundColor: "#ffffff" });
window.canvas = canvas;

const rows = 30;
const halfWidth = 3;
window.halfWidth = halfWidth;
const seatConfig = [halfWidth, halfWidth]; // 3, 3 refers to normal airline config of 3 seats left/right
const rowWidth = seatConfig.reduce((a, b) => a + b, 0);

const totalSeats = rowWidth * rows;

const people = initialise({
    canvas,
    system: fullyRandom,
    rowWidth,
    halfWidth,
    totalSeats,
});

window.cells = Array(rows)
    .fill(null)
    .map((_) => Array(rowWidth).fill({ current: null, incoming: null }));

const queue = [];

window.queue = queue;

for (const person of people) {
    window.queue.push({ current: person, incoming: null });
}

setInterval(() => {
    for (const person of people) {
        person.tick();
    }
}, 1000 / 1);
