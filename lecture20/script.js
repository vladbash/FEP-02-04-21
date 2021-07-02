// // 1. XHR - XMLHttpRequest
// const xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://reqres.in/api/users', false);

// // xhr.send();

// // console.log(xhr.response);

// // TODO: explain why `false` here
// xhr.open('POST', 'https://reqres.in/api/users', false);

// xhr.setRequestHeader('content-type', 'application/json');

// xhr.send(`{
//     "name": "morpheus",
//     "job": true
// }`);

// console.log(xhr.response);

// const obj = {
//     name: 'John',
//     surname: 'Snow',
//     age: 24,
//     alive: true,
//     attack: () => {
//         console.log('John attacks');
//     },
//     permissions: ['attack', 'rest', 'eat'],
//     pet: {
//         name: 'Soul',
//         type: 'wolf-dog(idk)'
//     }
// };

// const objStr = JSON.stringify(obj);

// console.log(objStr);

// const obj2str = `{"name": "Gerald", "age": 45, "isHuman": false }`;

// const obj2 = JSON.parse(obj2str);

// console.log(obj2);
// const listEl = document.getElementById('list');

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://reqres.in/api/users');

// xhr.send();

// xhr.onload = (e) => {
//     const response = JSON.parse(e.target.response);
//     console.log(response);

//     response.data.forEach(e => {
//         listEl.insertAdjacentHTML('beforeend', `<li>
//             <img src="${e.avatar}" style="height: 48px; width: 48px;"/>
//             <span>${e.first_name} ${e.last_name}</span>
//         </li>`);
//     });
// };

// console.log('response received!');


const obj = {
    name: 'Test',
    foo: 'bar',
    toString: () => {
        return 'string';
    },
    toJSON: () => {
        return { name: "Another name"};
    }
};

console.log(JSON.stringify(obj));