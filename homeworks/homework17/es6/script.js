import { removeDuplicates, getHistory, removeForbiddenWords } from './utils.js';

// const arr1 = ['Alex', 12, 'math'];
// const arr2 = ['John', 11, 'phys'];

// const arr3 = [...arr1, ...arr2];

// const obj1 = {
//     name: 'Alex',
//     age: 12,
//     country: 'UK'
// };

// const obj11 = { ...obj1 };

// const obj2 = {
//     name: 'John',
//     surname: 'Malcolm',
//     city: 'NY',
//     age: 11
// };

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);
// console.log(obj1 === obj1); // true
// console.log(obj1 === obj11); // !true

// console.log(removeDuplicates('apple', 23, 55, 'hello'));
// console.log(removeDuplicates('green apple', 'Alex', 'John'));

// console.log(getHistory());

console.log(removeForbiddenWords('woopwoopwoophellowoopwoopworldwoop!woop', 'woop'));