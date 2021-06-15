/* 1 - Наследование */

// function Vehicle() {
//     this.color = 'black';
//     this.wheelsAmount = 4;
//     this.fuel = 'gas';
//     this.seats = 5;
//     this.fuelLevel = 0;

//     this.beep = () => {
//         console.log('beep beep');
//     };

//     this.run = () => {
//         if (this.fuelLevel <= 0) {
//             console.log(`I'm out of ${this.fuel}!`);
//         } else {
//             console.log(`I'm running!`);
//         }
//     };
// }

// function Bicycle(model) {
//     this.model = model;
//     this.wheelsAmount = 2;
//     this.fuel = 'human energy';
//     this.seats = 2;
// }

// Bicycle.prototype = new Vehicle();
// Bicycle.prototype.run = function() {
//     console.log(`${this.model} is running!`);
// };
// Bicycle.prototype.toString = function() {
//     return `bicycle model ${this.model}`;
// };

// const ukraine = new Bicycle('Ukraine');
// const varan = new Bicycle('Varan');
// const gnome = new Bicycle('Gnome');

// console.log(ukraine);
// console.log(varan);
// console.log(gnome);

// ukraine.run();
// varan.run();
// gnome.run();

// function Quadricycle (model) {
//     this.model = model;
//     this.wheelsAmount = 4;
//     this.fuel = 'gas';
// }
// Quadricycle.prototype = new Bicycle();

// const turbo = new Quadricycle('Turbo');
// console.log(turbo);
// turbo.run();

// // const arr = new Array(12, 23, 455);
// // console.log(arr);
// // const join = Array.prototype.join;
// const join = function(delimiter){ /*...*/ };

// join.call([0,1,2], '|');

/* 2 - Инкапсуляция */

// function Vehicle() {
//     this.fuel = 'gas';
//     this.fuelLevel = 10;

//     const getFuelFromTank = () => {
//         this.fuelLevel -= 1;
//     }

//     this.run = function () {
//         console.log('Vehicle is running!');
//         setInterval(() => {
//             if (this.fuelLevel > 0) {
//                 getFuelFromTank();
//             } else {
//                 console.log('Stop!');
//             }
//         }, 1000);
//     }
// }

// Vehicle.prototype.beep = function () {
//     console.log('beep beep!');
// }

// const car = new Vehicle();

// car.run();

// Resume
// 1 - underscore (_getFuelFromTank) | insecure
// 2 - closure | not optimal
// 3 - private modificator (#) just for class

/* 3 - Полиморфизм */

// 1 + 2 // сумма
// '2' + '3' // конкатанация

function sum(a, b) {
    /* ... реализация 1 */
    console.log('sum 1', a + b);
}

function sum(a, b, c) {
    /* ... реализация 2  */
    console.log('sum 2');
}

sum(1, 2);

sum(1, 2, 4);
