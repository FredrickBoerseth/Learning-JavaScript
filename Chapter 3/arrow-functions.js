const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
    console.log("Toot");
};