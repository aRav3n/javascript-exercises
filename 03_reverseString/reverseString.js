const reverseString = function(stringIn) {
    let stringOut = '';
    // Start at end of the string using charAt to populate stringOut
    let lastChar = stringIn.length - 1;
    for (let i = lastChar; i >= 0; i--) {
        let char = stringIn.charAt(i);
        stringOut += char;
    };
    // Return stringOut
    return stringOut;
};

// Do not edit below this line
module.exports = reverseString;
