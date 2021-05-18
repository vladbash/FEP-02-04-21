// Lexical env

// global scope
// const c = 4;

// function foo() { // functional scope 0
//     g = 9.8;

//     if (true) { // 1
//         var a = 12;
//     }

//     // ----------

//     { // 2
//         let b = 42;
//     }

//     { // 3

//         if (true) { // 4
//             console.log(c + 12);
//         }
//     }
//     console.log(c);

//     if (true) { // 5
//         console.log(a);
//     }
// }

// foo();
// 'use strict';

// function bar() {
//     // 'use strict';
//     // var c = 0;
//     const c = 42;

//     let bb = 12;

//     bb = 24;

//     // pi = 3.14;

//     if (1 > 0) {
//         let c = 24;

//         {
//             // {
//             //     var c = 0; // points to line 37
//             // }
//             let c = 13;
//             if (true) {
//                 console.log(c); // <- 13
//             }
//             {

//             }
//         }

//         console.log(c); // <- 24
//     }
//     console.log(c); // <- 
// }

// bar();
// console.log(pi);

// Array methods

const demoArray = [12, 44, 56, 34, 88];

// concat - склеивает два массива возвращая новый
const newArray = demoArray.concat([23, 44, 76]);

// push - добавляет элемент в конец исходного массива (возвращает новую длину)
demoArray.push(42, 33, 89);

// pop - убирает последний элемент и возвращает его
const tail = demoArray.pop();

// shift - убирает первый элемент и возвращает его
const head = demoArray.shift();

// unshift - добавляет новый элемент в начало (возвращает новую длину)
demoArray.unshift(12, 8);

// join - превращает массив в строку с заданным разделителем (по-умолчанию резделитель ,)
const demoString = demoArray.join(' - ');
console.log(demoString);

// (String) split - разбивает строку в массив по разделителю
const newDemoArray = ('12 76 0 56 55 83 124 765 398').split(' ');
console.log(newDemoArray);

// forEach - проходит по всему массиву
let nArray = []
newDemoArray.forEach((e) => {
    nArray.push(+e);
});
console.log(nArray);

// map - проходит по всему массиву, применяет функцию к каждому элементу и возвращает новый массив
const nnArray = newDemoArray.map(e => +e);
console.log(nnArray);

// filter - проходит по массиву и проводит сравнения
const oddArray = nnArray.filter(e => e % 2 != 0);
console.log(oddArray);

// reduce - проходит по массиву и накапливает результат в аккамулятор
const sum = nnArray.reduce(function (accumulator, e) {
    if (e % 2 != 0) {
        return accumulator + e;
    }
    return accumulator;
}, 0);
console.log(sum);

// find - ищет элемент в массиве по условию
const el = nnArray.find(e => e > 100);
console.log(el);

// indexOf - ищет индекс элемента (возвращает -1, если элемента нет)
const index = nnArray.indexOf(19);
console.log(index);

// findIndex - ищет индекс элемента
const fIndex = nnArray.findIndex(e => e > 100);
console.log(fIndex);

// sort - сортирует элементы в массиве по функции
const sortedArray = nnArray.sort((a, b) => b - a);
console.log(sortedArray);