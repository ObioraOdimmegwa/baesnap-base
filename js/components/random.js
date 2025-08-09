const {
    floor,
    random
} = Math;

export function randomizeNumber(a, b) {
    return () => {
        return a + (b - a) * random();
    };
}

export function randomizeVector(x, y) {
    const randX = randomizeNumber(...x);
    const randY = randomizeNumber(...y);
    return {
        x: randX(),
        y: randY()
    };
}

export function randomizeArray(a) {
    const rand = randomizeNumber(0, a.length - 1);
    return () => {
        const i = floor(rand());
        return a[i];
    };
}