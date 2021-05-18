// Statement / Ветвления

// const op1 = +prompt('insert op1:');
// const op2 = +prompt('insert op2:');

// if (op2 == 0) { // == - (логический) оператор тождественности
//     alert('Делить на 0 нельзя!');
// } else {
//     alert('result is ' + (op1/op2));
// }

// if (op2 == 0) {
//     alert('Делить на 0 нельзя!');
//     console.log('Делить на 0 нельзя!');
// } else 
//     console.log('Делить можно!');

// console.log(`Operator 1: ${op1} Operator 2: ${op2}`);

// op2 == 0 -> true (false)
// == - (логический) оператор тождественности
// === - (логический) оператор тождественности (строгое)
// > - (логический) больше
// < - (логический) меньше
// >= - (логический) больше либо равно
// <= - (логический) меньше либо равно
// => - ??? (не использовать как логический оператор)

// && - и 
// || - или

// const a = 42;
// const b = '42';

// if (a == b) { 
//     // выполнится!
//     // Number == String -> Number == Number
//     // Number == Boolean -> Number == Number
//     // String == Boolean -> String == Number -> Number == Number
//     // String == String
//     // String == Object -> String == String
// }

// if (a === b) { // false
//     // не выполнится
// }

// const c = 5;
// const d = 4;

// if (c > d) {}
// if (c < d) {}
// if (c >= d) {}
// if (c <= d) {}

//  // c > d > 0 - в математике
// if (c > d > 0) {} // (c > d) > 0 -> true > 0 -> 1 > 0 -> true

// if (c > d && c > 0) {}

// if (c > d && c > 0 && d > 0) {
//     // какой-то код
// }

// if (c > d) {
//     if (c > 0) {
//         if (d > 0) {
//             // какой-то код
//         }
//     }
// }

// if (c > d || c > 0) {
//     // какой-то код
// }

// // && - выражение1 && выражение2 -> a > 0 && a > 5

// false && console.log('&& выражение 2'); // <- не вывелось

// c > 0 && console.log('&& с больше 0!'); // <- вывелось

// // || - выражение1 || выражение2 -> a > 0 || a > 5

// false || console.log('|| выражение 2'); // <- вывелось

// c > 0 || console.log('|| с больше 0!'); // <- не вывелось

// // примеры

// console.log(10 > 3); // true

// console.log(10 || 5); // 10

// console.log(10 && 5); // 5

// // еще примеры

// let someVar = 42;

// if (c > 0) {
//     someVar = null;
// }

// const myVar = someVar || 10;

// console.log("myVar: " + myVar); // -> 10

// const myNewVar = someVar && 42;

// console.log("myNewVar: " + myNewVar); // -> null

// const name = 'Alex';

// if (name == 'Alex') {
//     // какой-то код
//     console.log('Hello, Alex!');
// } else if (name == 'Bob') {
//     // какой-то код
//     console.log('Have a nice day, Bob');
// } else if (name == 'Tom') {
//     // какой-то код
//     console.log('Where is my money, Tom?');
// } else {
//     console.log('Who are you?');
// }

// console.log('Bye!');

// switch (name) {
//     case 'Alex':
//         console.log('Hello, Alex!');
//         break;
//     case 'Bob':
//         console.log('Have a nice day, Bob');
//         break;
//     case 'Tom':
//         console.log('Where is my money, Tom?');
//         break;
//     default:
//         console.log('Who are you?');
//         break;
// }

// console.log('Bye!');

// switch (name) {
//     case 'Alex': // name == 'Alex'
//         console.log('Hello, Alex!');
//         break;
//     case 'John': // -> name == 'John' || 
//     case 'Jane': // name == 'Jane' ||
//     case 'Jerry': // name == 'Jerry' || 
//     case 'Bob': // name == 'Bob' ||
//     case 'Tom': // name == 'Tom'
//         console.log('Where is my money?');
//         break;
//     default: // else
//         console.log('Who are you?');
//         break;
// }

// console.log('Bye!');

// условие ? выражение1 : выражение2 - тернарный оператор

// const a = +prompt('Insert a:');
// let b;

// if (a > 5) {
//     b = 'more than 5';
// } else {
//     b = 'less than 5';
// }

// console.log(b);

// const a = +prompt('Insert a:');
// let b = !a ? 'zero' : 'more than 0';

// console.log(b);

// typeof NaN

// const a = +'hdgfd'; // NaN
// const b = +'1as'; // NaN

// if (a != a) {
//     console.log('it works');
// }