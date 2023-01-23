const removeFromArray = function(arrayIn, ...itemsToRemove) {
    let arrayOut = [];
    // Populate arrayOut with all values that aren't items to remove
    for (arrayItem of arrayIn) {
        if (!itemsToRemove.includes(arrayItem)) {
            arrayOut.push(arrayItem);
        };
    };
    return arrayOut;
};

// Do not edit below this line
module.exports = removeFromArray;
