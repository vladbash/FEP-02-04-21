// 1 - к каждому айтему нужно добавлять время когда он был добавлен
// 2 - добавить чекбокс к каждому айтему и зачеркивать каждый айтем, когда чекбокс отмечен
// 3 - сделать кнопку возле каждого айтема для его удаления
// 4 - сделать кнопку возле каждого айтема для его дублирования (дубль идет в конец списка со своим временем)

const addItemBtnEl = document.getElementById('add-item-btn');
const itemInputEl = document.getElementById('item-content-input');
const listEl = document.getElementById('todo-list');

const itemTemplate = document.getElementById('item-template').innerHTML;

// Approach 1 (don't use!)
// const onItemDelete = evt => {
//     evt.target.parentElement.remove();
// };

// Approach 2 (делегирование события)
const onItemDeleteClick = evt => {
    console.log(evt);
    if (evt.target.dataset['action'] === 'delete') {
        evt.target.parentElement.remove();
    }
};
listEl.addEventListener('click', onItemDeleteClick);

// const render = (template, dataObject) => {
//     for(let key in dataObject) {
//         template = template.replaceAll(`{{${key}}}`, dataObject[key]);
//     }
//     return template;
// };

// Object.keys(dataObject) -> ['label', 'date']
const render = (template, dataObject) => Object
    .keys(dataObject)
    .reduce((acc, key) => {
        return acc.replaceAll(`{{${key}}}`, dataObject[key]);
    }, template);

addItemBtnEl.onclick = () => {
    const itemValue = itemInputEl.value;

    if (!itemValue) return;

    const liEl = document.createElement('li');
    // liEl.innerText = itemValue;
    // liEl.innerHTML = itemTemplate
    //     .replaceAll('{{label}}', itemValue)
    //     .replaceAll('{{date}}', new Date().toISOString());
    liEl.innerHTML = render(itemTemplate, {
        label: itemValue,
        date: new Date().toISOString()
    });

    listEl.append(liEl);
    itemInputEl.value = '';
};

// console.log(Date.now());

// const myDate = new Date();

// console.log(`${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}`);