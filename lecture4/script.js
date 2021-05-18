// const a = 41;

// switch (true) {
//     case a < 0:
//         console.log('a is less than zero');
//         break;
//     case a == 42:
//         console.log('a equals 42');
//         break;
//     case a !== 42:
//         console.log('a doesn\'t equal 42');
//         break;
//     default:
//         console.log('strange behaviour!');
//         break;
// }

// Object

// const a = 2;
// const b = a;

// const student = {
//     name: 'Bob',
//     age: 21,
//     profession: 'Cook'
// };

// const secondStudent = student;

// secondStudent.name = 'Robert';

// // secondStudent = { one: 1 }; // wouldn't work! due to const

// console.log('student: ', student);
// console.log('secondStudent: ', secondStudent);


// Вопрос на собеседованиях
// let first = { a: 2 };

// const second = first;

// first = { a: 3 };

// console.log(second.a); // 2? 3?

// const obj = {
//     age: 12
// };

// const name = 'age';

// console.log(obj[name]);
// console.log(obj['age']);

// 1-й способ
// const array = [12, 23, 42, 38]; // 0: 12, 1: 23, 2: 42, 3: 38

// console.log(array[1]);
// console.log(array.length);

// // 2-й способ (context)
// const array2 = new Array(22, 54, 42, 9);

// console.log(array2);

// Циклы

// С условием
// let a = 10;

// while (a > 3) {
//     // какой-то код
//     a = a - 1;
//     console.log('a = ', a);
// }

// console.log('a inside of while ', a);

// Цикл с пост-условием
// let b = 25;

// do {
//     b = b + 1;
//     console.log(b);
// } while (b < 25);

// b += 1;
// b++; // пост-инкремент
// ++b; // пре-инкремент

// let d = 1;

// const c = d++; // c = 1, d = 2
// const f = ++d; // d = 3, f = 3

// const g = d--; // g = 3, d = 2
// const h = --d; // d = 1, h = 1

// Пошаговый

// const array = [12, 23, 42, 'John', 53, 89, true, { name: 'Bob' }];

// const students = [
//     { name: 'Alex', age: 21, city: '17' },
//     { name: 'Taras', age: 29, city: 'Odessa', profession: 'Developer' }
// ];

// // console.table(students);

// for(let i = 0; i < students.length; i++) {
//     console.log(`${i + 1}. Name: ${students[i].name}, Age: ${students[i].age}, City: ${students[i].city}`);
// }

// 1 0 1
// 0 1 1
// 1 0 1

// const matrix = [
//     [1, 0, 1],
//     [0, 1, 1, 0],
//     [1, 0, 1]
// ];

// for(let i = 0; i < matrix.length; i++) {
//     // const element = matrix[i];
//     // console.log(element);
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         // break; // прерывает все итерации / весь цикл
//         continue;
//     }
//     console.log(i);
// }

// const result = confirm('Do you want to repeat?');

// console.log(result);

// for in

// const usersArray = ['Alex', 'Bob', 'John', 'Bill'];
// const user = {
//     name: 'Bob',
//     age: 22,
//     citizenship: 'UK'
// };

// for(let i = 0;i < usersArray.length; i++) {
//     console.log(`Hi, ${usersArray[i]}`);
// }

// for (let e in user) {
//     console.log(`${e}: ${user[e]}`);
// }

// for of (ES6/ES2015)
// const usersArray = ['Alex', 'Bob', 'John', 'Bill'];
// const user = {
//     name: 'Bob',
//     age: 22,
//     citizenship: 'UK'
// };

// for(let e of user) {
//     console.log(e);
// }

// let arr = [12, 42];

// arr[arr.length] = 33;

// console.log(arr);

// let obj = {
//     name: 'Bob',
// };

// obj['age'] = 22;
// obj.citizenship = 'UK';

// console.log(obj);
