let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}

// y is not visible here
console.log(x + z);


const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(100));

console.log(n);