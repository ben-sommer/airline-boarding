/**
 * shuffles the seats randomly
 * @returns {PersonSprite[]}
 */

export const fullyRandom = (seats) => {
    return seats.sort((a, b) => a.id > b.id);
};
