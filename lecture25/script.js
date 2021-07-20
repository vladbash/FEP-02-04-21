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

// 12 - destructurisation / decompose

// const obj = {
//     name: 'John',
//     surname: 'Doe',
//     jobTitle: 'leader'
// };

// let { name } = obj;
// let _name = obj.name;

// console.log(name); // John
// console.log(_name); // John
// console.log(obj.name); // John

// obj.name = 'Tyler';

// console.log(name); // John
// console.log(_name); // John
// console.log(obj.name); // Tyler

// function onClick({ target }) {
//     console.dir(target);
// }

// const megaObj = {
//     name: 'John',
//     skillSet: [
//         {
//             name: 'JavaScript',
//             frameworks: [
//                 {
//                     name: 'Angular',
//                     version: '8'
//                 },
//                 {
//                     name: 'React',
//                     version: '17'
//                 }
//             ]
//         }
//     ]
// };

// const { skillSet: [{ frameworks: [angular] }] } = megaObj;

// console.log(frameworks);

// const arr = [3, 5, 11];

// const [, , , three = -1] = arr;

// console.log(three);

// const stateArr = useState(); // -> [state, setState]

// stateArr.state;
// stateArr.state;
// stateArr.state;

// stateArr.setState();
// stateArr.setState();

// const [state, setState] = useState();

// state;

// state;

// setState(11);

// setState(22);

// 13 - default argument value
// function createUser(name, surname, position = 'customer') {
//     console.log(name, surname, position);
// }

// createUser('John', 'Doe');
// createUser('Derek', 'Doe', 'admin');

// function createUserES5(name, surname, position) {
//     if (!position) position = 'customer';
//     console.log('ES5: ', name, surname, position);
// }

// createUserES5('John', 'Doe');
// createUserES5('Derek', 'Doe', 'admin');

// function createUser({ name = 'Name', surname = 'Surname', position = 'Who knows'} = {}) {
//     console.log(name, surname, position);
// }

// createUser();

// 14 - new object fields notation
// const name = 'John';

// const obj = {
//     name,
//     onClick: () => {
//         console.log('onClick');
//     },
//     onBlur: function() {
//         console.log('onBlur');
//     },
//     onToggle() {
//         console.log('onToggle');
//     }
// };

// obj.onBlur();
// obj.onClick();
// obj.onToggle();

