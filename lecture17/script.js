// Наследование

/** 
class Animal {
    name
    age
    woolColor
    hasWool = false
    isDomestic = false

    sound() {
        console.log(this.name);
    }

    feed(meal) {}
} */

/*

class Wolf: Animal {
    hasWool = true
    sound() {
        console.log('Auf');
    }
}

class Dog: Wolf {
    isDomestic = true

    sound() {
        console.log('Woof');
    }
}

const spike = new Dog();
const guffy = new Dog();
 */

// function Animal() {
//     this.name = '';
//     this.age = 0;
//     this.woolColor = '';
//     this.hasWool = true;
//     this.isDomestic = false;

//     this.sound = function() {}

//     this.eat = function(meal) {
//         console.log(`${this.name} said: Om nom nom, such a testy ${meal}!`);
//     }
// }

class Animal {
    constructor() {
        this.name = '';
        this.age = 0;
        this.woolColor = '';
        this.hasWool = true;
        this.isDomestic = false;
    }

    sound() { }

    eat() {
        console.log(`${this.name} said: Om nom nom, such a testy ${meal}!`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }

    sound() {
        console.log('Meow!');
    }
}

const catty = new Cat('Tom');

console.log(catty);


// function DomCat(name) {
//     this.isDomestic = true;
//     this.name = name;
// }

// DomCat.prototype = new Cat();

// const garfield = new DomCat('Garfield');



