export const rectPerimeter = (x, y) => 2 * (x + y);

export const rectArea = (x, y) => x * y;

export const triArea = (x, y) => (x * y) / 2;

export const ringArea = (x, y) => {
    let outerRing = Math.PI * Math.pow(x, 2);
    let innerRing = Math.PI * Math.pow(y, 2);
    let ringArea = outerRing - innerRing;
    return ringArea * -1;
}

export const f2c = (x) => {
    return ((x - 32) * (5 / 9));
}

export const c2f = (x) => {
    return x * (9 / 5) + 32;
}
