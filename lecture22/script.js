// Example of event loop
// console.log('Hello'); // 0

// let a = 42;

// console.log(`a is ${a}`); // 1

// setTimeout(() => {
//     console.log('set timeout is async'); // 3? 4? - 4
// }, 1000);

// setTimeout(() => {
//     console.log('another set timeout'); // 3? 4? - 3
// }, 0);

// console.log('file is ended'); // 2

const getPromise = (timeOut) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            result: true,
            to: timeOut
        });
    }, timeOut);
});

getPromise(2000)
    .then(e => {
        console.log(e);
        return getPromise(1000);
    })
    .then(e => {
        console.log(e);
    })
    .catch(error => {
        console.log(error);
    });