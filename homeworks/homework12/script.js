function getAvgMark(name) {
    return `${name} has ${this.marks[0]}`;
}

function getMaxMark() {
    return this.marks[0];
}

function Student(name, faculty, marks) {
    /*
        Свойства объекта
        name - имя студента
        faculty - спецальность/факультет
        marks - массив с оценками
    */
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;
    this.getAvgMark = getAvgMark;
    this.getMaxMark = getMaxMark;
}

// const student = new Student();

// // Методы
// student.getAvgMark(); // средняя оценка студента
// student.getMaxMark(); // максимальная оценка
// student.getMinMark(); // минимальная оценка
// student.getTotal(); // сумма оценок
// student.getInfo(); // информация о студенте в виде name + faculty + total

// 0
const student = new Student('Garry', 'Griffindor', [85, 93, 10, 0, 85]);

// 1
// console.log(typeof student); // 'object'

// console.log(student.getAvgMark());

// 2
// const foo = student.getAvgMark;

// let studentFoo = foo.bind(student);

// const s2Foo = studentFoo.bind({
//     marks: [90]
// });

// console.log('s2Foo: ', s2Foo());

// 3.1
// const result = getAvgMark.apply(student, ['Bob']);

// console.log('apply getAvgMark:', result);

// 3.2
// const result = getAvgMark.call(student, 'Bob');

// console.log('call getAvgMark:', result);
// const pupil = new Student('Mark', 'Math', [12, 24, 12, 0]);

// const foo = pupil.getAvgMark.bind({
//     marks: [4]
// });

// const result = foo.call({
//     marks: [23]
// }, 'Mark');

// console.log(result);

// const spanEls = document.querySelectorAll('.label');

// console.log(spanEls);

// const mapThoughtNodeList = Array.prototype.map.bind(spanEls);

// Array.prototype.forEach.call(spanEls, e => {
//     console.log(e);
// });

// const newArr = new Array(2, 4, 56);
// console.log(newArr);

const foo = (evt) => {
    console.log(evt);
};

const demoEl = document.getElementById('demo');

demoEl.addEventListener('click', foo);

arr.map();

function doSomething(a, b, actionCb) {
    return actionCb(a, b);
}

function sum(a, b) {
    return a + b;
}

const result = doSomething(5, 5, (a, b) => {
    return a * b;
});

const result2 = doSomething(5, 5, sum);

console.log(result);
console.log(result2);

// function maxValue() {}
// function minValue() {}
// function avrgValue() {}

// function handleArray(arr) {
//     maxValue(arr);
//     minValue(arr);
//     avrgValue(arr);

//     return [];
// }

// const arr = [7, 9, 4, 21, 8, 10, 77, 13, 14, 23, 33, 12, 737];
// const brr = arr.filter().map();

// console.log(brr);

// On 

// for () {
// }
// for() {    
// }
