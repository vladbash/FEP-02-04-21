// Примитивы (ES5)

var numberVar = 42;
var stringVar = "42";
var booleanVar = true;
var nullVar = null;
var undefinedVar = undefined;

// Вывод в консоль

// console.log("Value of variable is " + stringVar);
// console.info("Value of variable is " + stringVar);
// console.warn("Value of variable is " + stringVar);
// console.error("Value of variable is " + stringVar);
// console.table(); // <- when we will learn arrays

// HW with 
// console.log("Hello!");
// const userName = prompt("What is your name?", "default name");
// console.log(userName);

// Object
// var person1 = {
//     name: "Alex",
//     age: 42,
//     isMarried: true,
//     status: undefined
// };

// var person2 = {
//     name: "Bob",
//     age: 22,
//     isMarried: false,
//     status: undefined
// };

// console.log(person1.name);
// console.log(person2.name);

// String / Template String

const str1 = 'my string 1';
const str2 = "my string 2";
const str3 = `my string ${str2}`; // -> "my string " + str2;

const lorem = 'lorem ipsum';
const siAmet = 'si amet';

const name = 'Alex';

// const description = 'Some description that describes ' + lorem + ' and ' + siAmet + ' for ' + name;

const description = `Some description that describes ${lorem} and ${siAmet} for ${name}`;

const regularStr = "What is your name?\nMy name is Alex"; // \n - перенос строки, \t - табуляция

const templateStr = `What is your name?
My name is Alex.
${numberVar}`;

// console.log(templateStr);

// It's an object
// const a = {
//     key: 'a'
// };

// It's a block
// {
//     var b = 10;
// }

// It isn't object - it's a block
// {
//     somePoint: {
//         var a1 = 10;
//         console.log(a1);
//         var c = "string c";

//         console.log(c);
//     }
// }

// var a = 10; 

// console.log(a);

// {
//     var a = 'a';
//     console.log(a);
// }

// console.log(typeof a);

// const a = 10; 

// console.log(a);

// {
//     const a = 'a';
//     console.log(a);
// }

// console.log(typeof a);
// console.log(a);


const a = 42;
const b = '1';

const c = a + Number(b); // c - 43

