import { PersonSprite } from "../canvas/PersonSprite.js";
import { SeatSprite } from "../canvas/SeatSprite.js";

/**
 * init fn
 */
export const initialise = ({
    canvas,
    system,
    rowWidth,
    halfWidth,
    totalSeats,
}) => {
    const seatConfig = [halfWidth, halfWidth]; // 3, 3 refers to normal airline config of 3 seats left/right

    const offsetX = 16;
    const offsetY = (600 - 16 * (rowWidth + seatConfig.length - 1)) / 2;

    const people = system(
        Array(totalSeats)
            .fill(null)
            .map((_, i) => {
                const col = i % rowWidth;
                const row = Math.floor(i / rowWidth);

                let aisleOffset = col > 2 ? 1 : 0;

                canvas.addSprite(
                    new SeatSprite({
                        x: offsetX + (3 + row) * 16,
                        y: offsetY + col * 16 + aisleOffset * 16,
                        width: 16,
                        height: 16,
                        color: "purple",
                    })
                );

                return new PersonSprite({
                    x: offsetX + 2 * 16 + 3,
                    y: offsetY + halfWidth * 16 + 3,
                    width: 10,
                    height: 10,
                    color: "red",
                    row,
                    col,
                });
            })
    );

    people.forEach((person, i) => {
        person.setCanvas(canvas);
        person.x -= 16 * i;
        canvas.addSprite(person);
    });

    return people;
};
export const convToCanvasLocation = (row, col) => {
    const offsetX = 16;
    const offsetY = (600 - 16 * (row + windows.halfWidth - 1)) / 2;
    let aisleOffset = col > 2 ? 1 : 0;
    return {
        x: offsetX + (3 + row) * 16,
        y: offsetY + col * 16 + aisleOffset * 16,
    };
};
export const convToGridLocation = (x, y) => {
    const offsetX = 16;
    const offsetY = (600 - 16 * (row + windows.halfWidth - 1)) / 2;
    const row = Math.floor((y - offsetY) / 16);
    const col = Math.floor((x - offsetX) / 16);
    return { row, col };
};
