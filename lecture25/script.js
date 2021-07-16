// ES6

// 1 - Array.from

// const arr = Array.from('apple'); // -> ['a', 'p', 'p', 'l', 'e']

// 2 - Set

// const uniq = new Set('apple'); // -> 'a', 'p', 'l', 'e'

// 3 - spread/rest

// rest
// const foo = (...args) => {
//     console.log(args); // [1, 2, 3, 4, 5]
// };

// foo(1, 2, 3, 4, 5);

// // spread
// const arr = [...[1,2,3], ...[4,5,6]]; // [1, 2, 3, 4, 5, 6]

// const obj = {};

// const obj1 = obj;
// console.log(obj === obj1); // true

// const obj2 = { ...obj };
// console.log(obj === obj2); // false

// const user1 = {
//     name: 'Alex',
//     age: 22
// };

// const user2 = {
//     name: 'John',
//     surname: 'Smith'
// };

// const superUser = { ...user1, ...user2 };
/*
    {
        name: 'John',
        age: 22,
        surname: 'Smith'
    }
*/

// 4 - arrow functions
// 5 - class
// 6 - async/await

// const getUser = async () => await fetch('https://reqres.in/api/users/2');

// const foo = async () => {
//     console.log('hello');
    
//     const user = await getUser();
//     console.log('user', user);

//     console.log('bye');
// };

// foo();

// 7 - BigInt

// 1n
// BigInt(1)
// 1n + 1n -> 2n
// 1n + 1 -> Error

// 8 - Symbol
// const uniqVal = Symbol('uniq');
// console.log(uniqVal);

// Symbol.iterator

// 9 - let/const
// 10 - es6-modules - import/export
// 11 - template string