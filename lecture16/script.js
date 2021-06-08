// try/catch base
// let i;
// try {
//     console.log(foo());

//     !function foo() {
//         return 42;
//     }

//     i = 'new value';
// } catch {
//     i = 'default value in case of error';
// }

// console.log('another log');

// console.log(i);

// try/catch with custom error

// let a = 0;

// try {
//     if (a == 0) {
//         throw 42;
//     }
// } catch (e) {
//     console.log(e);
//     console.error('Some error happened');
// }

// console.log('You result is: ', a);

// try {
//     throw 42;
// } catch (e) {
//     console.log(e);
// }
// console.log(e);

// function main() {
//     if (true) {
//         var b = 10;
//         const c = 2;
//         if (true) {
//             console.log(c);

//             if (1) {
//                 var d = 12;
//             }
//         }
//     }

//     console.log(b, d);
// }

// main();

function greeting() {
    console.log(`Hello, ${this.name}!`);
    return 42;
}

const person = {
    name: 'Bob'
};

// 1 - bind
// const boundGreeting = greeting.bind(person);
// // console.log(typeof boundGreeting); // function
// boundGreeting();

// 2 - call
// const someVar = greeting.call(person);
// console.log('someVar', someVar);

// 2.1 - apply
// greeting.apply(person);

// 3 - inline with object
// person.greeting = greeting;

// person.greeting();

// 4 - new
// function Student(name) {
//     this.greeting = greeting;
//     this.name = name;
// }

// const newStudent = new Student('John');
// newStudent.greeting();

// Потеря контекста
function doSomething(cb) {
    console.log('doSomething is working');
    cb();
}

// function greeting() {
//     console.log(`Hello, mr. ${this.surname}`);
// }

// const agent = {
//     surname: 'Bond',
//     greeting: () => {
//         console.log(`Hello, mr. ${this.surname}`);
//     }
// };

// // agent.greeting();

// doSomething(agent.greeting);

// function Agent(surname) {
//     this.surname = surname;
//     this.greeting = () => {
//         console.log(`Hello, mr. ${this.surname}`);
//     };
// }

// const j = new Agent('Weak');

// doSomething(j.greeting);

const mainEl = document.getElementsByClassName('main')[0];

function Agent(surname) {
    this.surname = surname;
    this.greeting = () => {
        console.log(`Hello, mr. ${this.surname}`);
    };
    this.onClick = () => {
        console.log(this);
        console.log(this.surname, 'was clicked by');
    }
}

const f = new Agent('Weak');

mainEl.addEventListener('click', f.onClick);