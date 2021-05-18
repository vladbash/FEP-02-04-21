// const titleEl = document.getElementById('title');
// const titleEls = document.getElementsByClassName('title'); // псевдо-массив, HTMLCollection
// const divEls = document.getElementsByTagName('div');

// const title2El = document.querySelector('.title');
// const divTitleEls = document.querySelectorAll('.title'); // псевдо-массив, NodeList

// console.dir(divEls[1]);

// divEls[1].classList.add('container');
// divEls[1].classList.remove('main');

// divEls[1].classList.toggle('hide');

// divEls[1].classList.contains('hide');
// divEls[1].classList.replace('hide', 'show');

// // divEls[1].innerText = 'new text for element!';

// divEls[1].nextElementSibling.textContent = 'Test!';

// const dataList = [
//     { id: 0, value: 'Prepare to Hillel Lesson' },
//     { id: 1, value: 'Check all the homeworks' }
// ];

const btnEl = document.getElementById('btn');
const boxEl = document.getElementById('box');

console.dir(btnEl);

btnEl.onclick = function() {
    boxEl.classList.toggle('hidden');
};