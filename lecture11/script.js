// HTMLCollection и NodeList

const containerListEl = document.getElementsByClassName('container'); // HTMLCollection - живая коллекция
const containerNodesEl = document.querySelectorAll('.container'); // NodeList - неживая коллекция

console.log(containerListEl);
console.log(containerNodesEl);

const mainEl = document.getElementById('main');

mainEl.innerText = 'Hello';

const newEl = document.createElement('span');

newEl.innerText = 'Child span element';

mainEl.append(newEl);

console.dir(mainEl);

// mainEl.children[0].remove();

// mainEl.remove();

console.log(containerListEl);
console.log(containerNodesEl);

// Elements Creating & Appending

// createElement
const anotherEl = document.createElement('span');
anotherEl.innerText = 'another item';
anotherEl.classList.add('bold');

anotherEl.style.margin = '12px 20px';
anotherEl.style.backgroundColor = 'red';

anotherEl.onclick = () => {
    console.log('span clicked!');
};

// вставляет в конец children
mainEl.append(anotherEl);

// вставляет в начало children
mainEl.prepend(anotherEl);

// innerHTML
// mainEl.innerHTML = `<h1>Hello!</h1> <div class="container"> New container element </div>`;


// insertAdjacent - afterbegin, afterend, beforebegin, beforeend
mainEl.insertAdjacentElement('beforeend', document.createElement('a'));
mainEl.insertAdjacentText('afterend', 'Inserted text');
mainEl.insertAdjacentHTML('beforebegin', `<b>Bold text</b>`);

// document.write
// document.write(`<a href="https://google.com" > Google </a>`);