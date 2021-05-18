alert('Hello!');

function ourIsNaN(num) {
    const result = num != num;
    return result;
}

do {
    const operation = prompt('Choose an operation (+, -, *, /, sin, cos, pow):');

    let firstOperand;
    // Option 1 NaN does not equal NaN
    // while (firstOperand != firstOperand) {
    //     firstOperand = +prompt('Insert the first operand: ');
    // }

    // Option 2 - global isNaN
    // while (isNaN(firstOperand)) {
    //     firstOperand = +prompt('Insert the first operand: ');
    // }

    // Option 3
    do {
        firstOperand = +prompt('Insert the first operand: ');
    } while (ourIsNaN(firstOperand));

    let secondOperand, result;

    switch (operation) {
        case '+':
        case '-':
        case '*':
        case '/':
        case 'pow':
        case '%':
            do {
                secondOperand = +prompt('Insert the second operand: ');
            } while (ourIsNaN(secondOperand));
            break;
    }

    switch (operation) {
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

} while (confirm('Do you want to repeat?'));