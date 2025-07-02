const isEven = function(N) {
    if (N < 0) {
        console.log("Can't compute negative number")
    }
    else if (N == 0) {
        console.log("Even");
    }
    else if (N == 1) {
        console.log("Odd");
    }
    else {
        return isEven(N - 2);
    }

}

isEven(50);
isEven(75);
isEven(-1);