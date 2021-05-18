alert('Hello!');
const operation = prompt('Choose an operation (+, -, *, /, sin, cos, pow):');

let firstOperand = +prompt('Insert the first operand: ');
let secondOperand, result;

// if (operation == '+' || operation == '-' || operation == '*' || operation == '/' || operation == 'pow') {
//     secondOperand = +prompt('Insert the second operand: ');
// }
// refactored by following part

switch(operation) {
    case '+':
    case '-':
    case '*':
    case '/':
    case 'pow':
    case '%':
        secondOperand = +prompt('Insert the second operand: ');
        break;
}

switch(operation) {
    case '+':
        result = firstOperand + secondOperand;
        break;
    case '-':
        result = firstOperand - secondOperand;
        break;
    case '*':
        result = firstOperand * secondOperand;
        break;
    case '/':
        result = firstOperand / secondOperand;
        break;
    case 'pow':
        result = Math.pow(firstOperand, secondOperand);
        break;
    case 'sin':
        result = Math.sin(firstOperand);
        break;
    case 'cos':
        result = Math.cos(firstOperand);
        break;
}

const operationFormedResult = `Result of operation ${operation} is ${result}`;

console.log(operationFormedResult);
alert(operationFormedResult);