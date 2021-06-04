// closures HW

function calc(a) {
    let result = a;
    return {
        add: b => result += b,
        sub: b => result -= b,
        mult: b => result *= b,
        div: b => result /= b,
        getResult: () => result,
        printResult: () => {
            console.log(result);
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


