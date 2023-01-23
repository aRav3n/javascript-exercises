const removeFromArray = function(arrayIn, itemToRemove) {
    let length = arrayIn.length;
    let arrayOut = [];

    // Populate arrayOut with all values that aren't items to remove
    for (let i = 0; i < length; i++) {
        if (arrayIn[i] !== itemToRemove) {
            arrayOut[arrayOut.length] = arrayIn[i];
        };
    };
    return arrayOut;
};

// Do not edit below this line
module.exports = removeFromArray;
