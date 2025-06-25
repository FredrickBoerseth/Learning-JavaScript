let num = Number(prompt("Pick a number"));

if (num < 10) {
    console.log("small");
} else if (num < 100) {
    console.log("Medium");
} else if (num > 99) {
    console.log("Large");
} else {
    console.log("Give me a number")
}