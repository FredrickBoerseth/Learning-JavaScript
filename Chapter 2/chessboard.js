let size = 16;
let board = " ";



for(let numy = 0; numy < size; numy++) {
    for(let num = 0; num < size; num++) {
    if ((numy + num) % 2 == 0) {
        board += " ";
    }
    else {
        board += "#";
    }
    
}
board += "\n"
}
console.log(board);