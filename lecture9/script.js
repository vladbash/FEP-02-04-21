// toString

// const arr = [12, 42];

// console.log(arr.toString());

// const today = new Date();
// console.log(typeof today);

// console.log(today.toString());

// ------------

// closure

// function foo() {
//     const b = 12;
//     let a = 5;

//     return a;
// }

// const a = 5;
// const b = a;

// const objA = {
//     a: 100
// };

// const objB = objA;


// function bar() {
//     const b = 42;

//     return () => {
//         console.log(b);
//     };
// }

// foo();

// const newF = bar();
// // newF();

// //
// // looks like
// //
// // const newF1 = () => {};
// // newF1();

// function sum(a) {
//     return b => a + b;
// }

// const sumWith2 = sum(2);

// console.log(sumWith2(4)); // 6

// console.log(sumWith2(6)); // 8

// console.log(sumWith2(40)); // 42

// function processArray(array) {
//     return {
//         push: (e) => array.push(e),
//         head: () => array[0],
//         tail: () => array[array.length - 1],
//         print: () => console.log(array.join(' '))
//     };
// }

// const arrayProcessObj = processArray([]);
// const arrayProcessObj2 = processArray([]);

// arrayProcessObj.push(12);
// arrayProcessObj.push(34);
// arrayProcessObj.push(42);

// arrayProcessObj.print();

// arrayProcessObj2.print();

// console.log(arrayProcessObj.tail());

// console.log(document);

console.log(title);

const titleEl = document.getElementById('title');

console.log(titleEl.innerText);