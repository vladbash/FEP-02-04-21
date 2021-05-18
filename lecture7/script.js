// void - зануляет (приводит к undefined)

// function foo() {
//     /* */
//     return 42;
// }

// console.log(void foo());

// let a = 5;

// console.log(void a);

// a = void a;

// markers

// // Block
// {
//     marker: for (let i = 0; i < 5; i++) {
//         for (let j = 0; j < 3; j++) {
//             // 
//             if (i == 4 && j == 1) {
//                 // завершить внешний цикл
//                 break marker;
//             }
//         }
//     }
// }


// // not a block
// const a = {};

// function foo() {
//     return {};
// }

// // var i = 0;
// // marker2: {
// //     console.log(i);
// //     i++;
// //     if (i < 5) {
// //         goto marker2;
// //     }
// // }

// Hoisting

// foo();
// console.log(bar);

// function foo() {}

// var bar = function() {};

// let buz = 12;
// const PI = 3.14;

// console.log(buz);
// console.log(PI);
// 'use strict';

// (function foo() {
//     var a, b;
//     a = b = 'hello';
// })();

// console.log(b);