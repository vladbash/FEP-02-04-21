const ENTER_CODE = 'Enter';

const addItemBtnEl = document.getElementById('add-item-btn');
const itemInputEl = document.getElementById('item-content-input');
const listEl = document.getElementById('todo-list');

const onAddItemClick = () => {
    const itemValue = itemInputEl.value;
    
    if (!itemValue) return;

    const liEl = document.createElement('li');
    liEl.innerText = itemValue;

    listEl.append(liEl);
    itemInputEl.value = '';
};

const onSthClick = () => {
    console.log('clicked');
};

// 1 - через свойство
// addItemBtnEl.onclick = onAddItemClick;

// 2 - inline
/*
    <button onclick="onAddItemClick()" type="button" id="add-item-btn" class="nes-btn is-primary actions-form-btn">
        Add task
    </button>
*/

// 3 - addEventListener <- Использовать в большинстве случаев!
// addItemBtnEl.addEventListener('click', onAddItemClick);
addItemBtnEl.addEventListener('click', (evt) => {
    onSthClick();
    evt.stopPropagation();
});

// itemInputEl.addEventListener('keypress', (evt) => {
//     // console.log(evt);
//     if (evt.code == ENTER_CODE && !evt.shiftKey) {
//         onAddItemClick();
//     }
// });

itemInputEl.addEventListener('change', evt => {
    console.log(evt.target.value);
});

itemInputEl.addEventListener('focus', evt => {
    console.log('focus', evt);
});

itemInputEl.addEventListener('blur', evt => {
    console.log('blur', evt);
});


// document.getElementById('container').addEventListener('click', () => {
//     console.log('main clicked');
// }); // true как третий арг для выполнения на погружение

// document.getElementById('text-block').addEventListener('click', (evt) => {
//     console.log('div clicked');
//     // evt.stopPropagation();
// }, {
//     capture: true,
//     once: true
// });

// document.getElementById('demo-href').addEventListener('click', evt => {
//     evt.preventDefault();
//     // window.location = 'https://ithillel.ua';
// });

