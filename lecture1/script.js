var reasonOfTheUniverse = 42; // number 
var name = 'Alex'; // string
var isMarried = false; // boolean
var someVar = null; // null
var anotherVar; // undefined
var anotherVar2 = undefined; // undefined

/* var studentName = '';

alert(studentName);

studentName = 'Oleg'; */

var studentName; // camel case (JS)
var PascalCaseVarName; // pascal case (also JS, but not for var)
var student_name; // snake case (not for JS, for Python)
// var some-heading-element; // kebab case (only for HTML)

var newDemoVar = 10,
    anotherVar = 22,
    thirdVariable = 'third var',
    newVar,
    isInfinite = false;

newVar = 'some value';

/* ------------- const, let ----------- */

let newDemoVarWithLet = 42;

newDemoVarWithLet = 24;

// alert(newDemoVarWithLet);

const myName = 'Vlad';

// alert(myName); // <--- interaction from user

// myName = 'James';

const accountNumber = '4141 58743 87547834',
        accountName = 'Vlad B';
let age = 43;

/* ------ Операторы ------- */

// +-/* math
// = assignment
// , order
// ; end of operation
// + concat (strings)

// binary (operand1 + operand2)
// unary (+,!)

let sumOfNumber = 42 + 24;
let sumOfStrings = 'string with 42' + ' 24'; // 'string with 42 24'

/* ------- Привидение типов ----- */
// Number
// Явное
let firstNumVar = Number(12),
    secondNumVar = Number('42'), // from string to number
    thirdNumVar = Number(true), // boolean - true = 1, false = 0
    fourthNumVar = Number(null), // null - 0
    fifthNumVar = Number(undefined) // undefined - 0

// Heявное

let firstNumVarT2 = +'42', // from string to number
    secondNumVarT2 = +false, // 0
    fourthNumVarT2 = +null, // null - 0
    fifthNumVarT2 = +undefined; // undefined - 0

let firstNumVarT3 = '42' - 2; // from string to number -> 40

let errorNumVar = Number('one dd'); // NaN
let errorNumVarV2 = 'one dd' - 3; // NaN

// String 
// Явное
let firstStringVar = String(42), // num to string -> '42'
    secondStringVar = String('42'), // '42'
    thirdStringVar = String(true), // "true"
    fourthStringVar = String(null), // "null"
    fifthStringVar = String(undefined); // "undefined"

// Неявное
let firstStringVarT2 = 42 + '', // num to string -> '42'
    secondStringVarT2 = '42' + '', // '42'
    thirdStringVarT2 = true + '', // "true"
    fourthStringVarT2 = null + '', // "null"
    fifthStringVarT2 = undefined + ''; // "undefined"

// Boolean
// Явное
let firstBoolVar = Boolean(21), // num to boolean -> true
    secondBoolVar = Boolean(0), // false
    thirdBoolVar = Boolean(true), // true
    fourthBoolVar = Boolean("dsksdjfdjkdfjksd"), // true
    fifthBoolVar = Boolean(""), // false
    sixthBoolVar = Boolean(null), // false
    seventhBoolVar = Boolean(undefined); // false

// Неявное
let firstBoolVarT2 = !!false, // bool -> bool
    secondBoolVarT2 = !!'42', // !!'42' -> !(!(true)) -> !(false) -> true
    thirdBoolVarT2 = !!1, // true
    fourthBoolVarT2 = !!null, // false
    fifthBoolVarT2 = !!undefined; // false

// HW
// alert('Hello');
// const answer = prompt('How are you?');
// alert(answer);