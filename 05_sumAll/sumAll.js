const sumAll = function(startNumber, endNumber) {
    let sum = 0;
    // Verify that numbers are legit and >= 0
    if (typeof startNumber != 'number' || typeof endNumber != 'number' || startNumber < 0 || endNumber < 0) {
        return 'ERROR';
    };
    if (startNumber > endNumber){
        let temp = startNumber;
        startNumber = endNumber;
        endNumber = temp;
    };
    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
