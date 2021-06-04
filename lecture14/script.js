function getResults() {
    return `${this.name} has ${this.total} points`;
}

const student = {
    name: 'Ivan',
    total: 42,
    getResult: getResults
};

const anotherStudent = {
    name: 'Bob',
    total: 84,
    getResult: getResults
};

console.log(student.getResult());
console.log(anotherStudent.getResult());
// console.log(getResults());

// функция конструтор
function Student(name, total) {
    this.name = name;
    this.total = total;
    this.getResult = getResults;

    return 10;
}

const students = [
    new Student('Ivan', 42),
    new Student('John', 64),
    new Student('Bob', 22)
];

console.log(students);

students.forEach(e => {
    console.log(e.getResult());
});

console.log(Number('42'));
console.log(new Number('42'));

function foo() {}

console.log(new foo()); // foo {} -> Object
console.log(foo()); // undefined