// closures HW

function calc(a) {
    return {
        add: b => a += b,
        sub: b => a -= b,
        mult: b => a *= b,
        div: b => a /= b,
        getResult: () => a,
        printResult: () => {
            console.log(a);
        }
    };
}

// calc -> obj
const calcObj = calc(12);

calcObj.add(2); // -> 12 + 2 = 14
calcObj.sub(3); // ->  14 - 3 = 11
calcObj.mult(2); // 11 * 2 = 22
calcObj.div(11); // 22 / 11 = 2

calcObj.printResult(); // -> 2