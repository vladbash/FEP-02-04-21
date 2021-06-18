class Burger {

    static SIZES = {
        small: 'small',
        medium: 'medium',
        extra: 'extra'
    }

    static TOPPINGS = {
        mayoo: { price: 10, ccal: 100 },
        cheese: { price: 15, ccal: 90 },
        free: { price: 5, ccal: 85 },
    }

    #toppings = [];

    get toppings() {
        return this.#toppings;
    }

    set toppings(value) {
        this.#toppings = value;
    }

    
    size = Burger.SIZES.small;

    constructor(size) {
        this.size = size;
        this.properties = {
            [Burger.SIZES.small]: {
                price: 50,
                ccal: 150
            },
            [Burger.SIZES.medium]: {
                price: 75,
                ccal: 200
            },
            [Burger.SIZES.extra]: {
                price: 90,
                ccal: 400
            }
        };

        this.init();
    }

    init() {
        const sizeProp = this.properties[this.size];
        this.price = sizeProp ? sizeProp.price : 0;
        this.ccal = sizeProp ? sizeProp.ccal : 0;
    }

    getPrice() {
        let toppingsPrice = 0;
        this.#toppings.forEach(e => {
            toppingsPrice += e.price;
        });
        return this.price + toppingsPrice;
    }

    getCal() {
        return this.ccal + this.#toppings.reduce((acc, e) => acc + e.ccal, 0);
    }

    addTopping(topping) {
        this.#toppings.push(topping);
    }
}

class CheeseBurger extends Burger {
    constructor(size) {
        super();
        this.size = size;
        this.properties = {
            [Burger.SIZES.small]: {
                price: 55,
                ccal: 175
            },
            [Burger.SIZES.medium]: {
                price: 80,
                ccal: 240
            },
            [Burger.SIZES.extra]: {
                price: 100,
                ccal: 450
            }
        };

        this.init();
    }

    addTopping(topping) {
        super.addTopping(topping);
    }
}

// const burgerForMe = new CheeseBurger(Burger.SIZES.small);
// burgerForMe.addTopping(Burger.TOPPINGS.cheese);
// burgerForMe.addTopping(Burger.TOPPINGS.cheese);
// burgerForMe.addTopping(Burger.TOPPINGS.free);

const bg = new Burger(Burger.SIZES.small);
bg.addTopping(Burger.TOPPINGS.cheese);

console.log('1', bg.toppings);
bg.toppings = [];
console.log('2', bg.toppings);

