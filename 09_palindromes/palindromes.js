const palindromes = function (inputWord) {

    // Convert all letters to lower case
    let lowerCaseWord = inputWord.toLowerCase();
    // Remove all non letters
    let initialLength = lowerCaseWord.length;
    let convertedInputWord = "";
    for(let i = 0; i < initialLength; i++) {
        if(lowerCaseWord.charAt(i) != lowerCaseWord.charAt(i).toUpperCase()) {
            convertedInputWord += lowerCaseWord.charAt(i);
        };
    };
    // Check if is palindrome
    const wordLength = convertedInputWord.length;
    for(let i = 0; i < wordLength; i++) {
        if(convertedInputWord.charAt(i) != convertedInputWord.charAt(wordLength - 1 - i)) {
            return false;
        };
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;