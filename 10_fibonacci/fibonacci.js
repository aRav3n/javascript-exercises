const fibonacci = function(sequencePosition) {
    if(sequencePosition < 0) {
        return "OOPS";
    };
    let fibonacciNumbers = [];
    for(let i = 0; i < sequencePosition; i++){
        if(i == 0 || i == 1){
            fibonacciNumbers[i] = 1;
        } else {
            fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        };
    };
    let answer = fibonacciNumbers[sequencePosition - 1];
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
