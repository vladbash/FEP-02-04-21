// Функции

// Простая функция
// function main() {
//     const message = 'Hello from main!';

//     alert(message);
//     console.log(message);
// }

// main();

// Функция с аргументом
// function main(message) {
//     alert(message);
//     console.log(message);
// }

// main('Hello from main with argument!');

// main('Hello from main with another argument!');

// Функция с несолькими аргументами
// function sum(a, b) {
//     console.log(a, b, a + b);
// }

// // let b;
// // console.log(b); // undefined

// sum(42, 34);
// sum(12);
// sum();

// Абстрактный пример
// function ourIsNaN(num) {
//     const result = num != num;
//     return result;
// }

// function ourIsNaN(num) {
//     return num != num;
// }

// const flag = ourIsNaN(NaN);
// console.log(flag);

// function sum(a, b) {
//     if (a > b) {
//         return a + b;
//     }
//     a = a * 2;
//     return a + b;
// }

// const result = sum(2, 2);
// console.log(result);

// function foo() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//         if (i == 3) {
//             return;
//         }
//     }
// }

// const a = foo();
// console.log(a);

// console.log(typeof foo);

// Function declaration

function fName() { }

// Function expression

const f2Name = function () {
    console.log('f2Name applied!');
};

f2Name();

const f3Name = fName;

// Arrow function (TBD)