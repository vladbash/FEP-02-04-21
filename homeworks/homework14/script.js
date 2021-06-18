function Burger(size) {
    this.size = size;
    this.toppings = [];
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

    this._init();
}

Burger.SIZES = {
    small: 'small',
    medium: 'medium',
    extra: 'extra'
};

Burger.TOPPINGS = {
    mayoo: { price: 10, ccal: 100 },
    cheese: { price: 15, ccal: 90 },
    free: { price: 5, ccal: 85 },
};

Burger.prototype._init = function() {
    const sizeProp = this.properties[this.size];
    this.price = sizeProp ? sizeProp.price : 0;
    this.ccal = sizeProp ? sizeProp.ccal : 0;
}

Burger.prototype.getPrice = function() {
    let toppingsPrice = 0;
    this.toppings.forEach(e => {
        toppingsPrice += e.price;
    });
    return this.price + toppingsPrice;
};

Burger.prototype.getCal = function() {
    return this.ccal + this.toppings.reduce((acc, e) => acc + e.ccal, 0);
};

Burger.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
};

function CheeseBurger(size) {
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

    this._init();
}
CheeseBurger.prototype = new Burger();

function FishBurger() {}
FishBurger.prototype = new Burger();

function CrabsBurger() {}
CrabsBurger.prototype = new Burger();

const burgerForMe = new CheeseBurger(Burger.SIZES.small);
burgerForMe.addTopping(Burger.TOPPINGS.cheese);
burgerForMe.addTopping(Burger.TOPPINGS.cheese);
burgerForMe.addTopping(Burger.TOPPINGS.free);

console.log('We spent: ', burgerForMe.getPrice());
console.log('We get: ', burgerForMe.getCal());

console.log(burgerForMe);