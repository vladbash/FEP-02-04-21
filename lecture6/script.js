// function declaration

// foo();

// function foo() {
//     console.log('log from foo!');
// }

// // function expression

// var bar = function fBar() {
//     console.log('log from bar');
//     console.log('inside of fBar ', typeof fBar);
// };

// bar();
// console.log(typeof fBar);

// !function buz() {
//     console.log('hello from buz');
// }

// const fooArrow = (arg1, arg2, arg3) => {};

// const barArrow = arg => {
//     console.log(arg);
//     return `${arg} `;
// };

// const sumArrow = (a, b) => a + b;

// const sum = function(a, b) {
//     return a + b;
// };

// // buz(); // <- won't work

// // IIFE -> immediately invoked function expression
// (function() {})();

// const obj = {
//     name: 'Bob',
//     printAge: function() {
//         console.log(32);
//     },
//     linkedFunction: foo
// };

// obj.printAge();
// obj.linkedFunction();

// const array = [23, 45, 66];
// const anotherArray = [123, 564, 999];

// console.log(array.concat(anotherArray));

// const demoArr = {
//     concat: (arr1, arr2) => {
//         for(let i = 0; i < arr2.length; i++) {
//             arr1.push(arr2[i]);
//         }
//         return arr1;
//     }
// };

// Recursion
// function foo() {
//     foo();
// }

// Factorial with recursion
// function factorial(n) {
//     if (n == 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(200)); // -> 5 

const array = [23, 45, 66];

// array.push(12); // inserts 12 to the end of array
// array.unshift(22); // insets 22 to the beginning of array
// array.pop(); // -> returns last element (12), and removes the last element
// array.shift(); // -> returns the first element (22), and removes the first element
// array.toString(); // -> returns a string contains array element

// function sum(a, b) {
//     return a + b;
// }

// function math(a, b, operation) {
//     return operation(a, b);
// }

// console.log(math(2, 2, sum));

function printArg(arg) {
    console.log(arg);
}

array.forEach(printArg);

//////////
function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

forEach(array, printArg);