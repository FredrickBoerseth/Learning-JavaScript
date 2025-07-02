let numCount = 0;

function countBs(stuffs) {
    countChar(stuffs, 'B');
}



function countChar(stuffsHere, charHere) {
    for (let num = 0; num <= stuffsHere.length; num++) {
        if (stuffsHere[num] == charHere) {
            numCount++;
        }
        else {
            continue;
        }
    }
    console.log(numCount);
}

// countChar("Potatoes", "o");
// countBs("Balenciaga");