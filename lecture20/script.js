// 1. XHR - XMLHttpRequest
const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://reqres.in/api/users', false);

// xhr.send();

// console.log(xhr.response);

// TODO: explain why `false` here
xhr.open('POST', 'https://reqres.in/api/users', false);

xhr.setRequestHeader('content-type', 'application/json');

xhr.send(`{
    "name": "morpheus",
    "job": "leader"
}`);

console.log(xhr.response);