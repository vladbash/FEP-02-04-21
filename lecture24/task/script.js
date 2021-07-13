import { 
    setInitial, 
    add, 
    subtract, 
    divide, 
    multiply, 
    getResult 
} from './calculator.js';

setInitial(10);

add(5);
subtract(12);
multiply(10);
divide(15);

console.log(getResult()); // 2