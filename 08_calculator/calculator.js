const add = function(firstNumber, secondNumber) {
	let answer = firstNumber +  secondNumber;
  return answer;
};

const subtract = function(firstNumber, secondNumber) {
	let answer = firstNumber - secondNumber;
  return answer;
};

const sum = function(numbers) {
	let answer = 0;
  for(let number of numbers) {
    answer += number;
  };
  return answer;
};

const multiply = function(numbers) {
  let answer = 1;
  for(let number of numbers) {
    answer *= number;
  };
  return answer;
};

const power = function(baseNumber, raisedToThe) {
	let answer = 1;
  for(let i = 0; i < raisedToThe; i++) {
    answer *= baseNumber;
  };
  return answer;
};

const factorial = function(factorialOf) {
  if(factorialOf === 0 || factorialOf === 1) {
    return 1;
  } else if(factorialOf > 1) {
    return factorialOf *= factorial(factorialOf - 1);
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
