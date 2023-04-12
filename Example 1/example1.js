// Normal Defined Function
function add(num1, num2) {
  return num1 + num2;
}

// Function as a variable
const subtract = function(num1, num2) {
  return num1 - num2;
}

// Arrow function with braces
const  multiply = (num1, num2) => {
  return num1 * num2;
}

// Arrow function without braces
const divide = (num1,num2) => num1/num2;

// Two random integers between 0 and 100
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

// Random operator to use
let operator = ["*", "/", "+", "-"][Math.floor(Math.random() * 4)];

// Holds calculated result
let result;

switch (operator) {
  case "+":
    result = add(num1, num2);
    break;
  case "-":
    result = subtract(num1, num2);
    break;
  case "*":
    result = multiply(num1, num2);
    break;
  case "/":
    result = divide(num1, num2);
    break;
  default:
    result = "Invalid operator";
}

// Substitute variable values using ${} with backticks.
console.log(`\n ${num1} ${operator} ${num2} = ${result.toFixed(2)} \n`);
console.log(`num1 : ${num1}`);
console.log(`num2 : ${num2}`);
console.log(`operator : ${operator}\n`);