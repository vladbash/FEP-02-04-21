alert("Hello!");

const operandA = +prompt("Insert the first operand: ");
const operandB = +prompt("Insert the second operand: ");

const results = `Calculations are finished!
Results:
Sum: ${operandA} + ${operandB} = ${operandA + operandB}
Diff: ${operandA} - ${operandB} = ${operandA - operandB}
Mult: ${operandA} * ${operandB} = ${operandA * operandB}
Div: ${operandA} / ${operandB} = ${operandA / operandB}
`;

console.log(results);
alert(results);