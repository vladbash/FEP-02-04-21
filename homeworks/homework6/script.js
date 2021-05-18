// factorial with recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// factorial with loop
function factorialLoop(n) {
    let result = 1;
    if (n <= 1) return result;

    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(10));
console.log(factorialLoop(10));

// arrays
function compareArrayWithNumber(array, num, compareCb) {
    for(let i = 0; i < array.length; i++) {
        if (compareCb(num, array[i])) return true;
    }
    return false;
}

function cleverPush(arr, num) {
    if(compareArrayWithNumber(arr, num, (a, b) => a > b)) {
        arr.shift();
        arr.push(num);
    } else {
        arr.pop();
        arr.unshift(num);
    }
    return arr;
}

console.log(cleverPush([12, 42, 23, 124, 1984], 7));
console.log(cleverPush([12, 42, 23, 124, 1984], 48));