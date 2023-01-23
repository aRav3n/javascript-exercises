const repeatString = function(stringIn, numberIn) {
    let stringOut = '';
    
    // Verify that numberIn is >= 0
    if (numberIn < 0) {
        return 'ERROR';
    };

    // Loop through numberIn times
    for (let i = 0; i < numberIn; i++) {
        stringOut += stringIn;
    };
    return stringOut;
};

// Do not edit below this line
module.exports = repeatString;
