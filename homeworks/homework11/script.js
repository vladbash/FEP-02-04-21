// 1 - к каждому айтему нужно добавлять время когда он был добавлен
// 2 - добавить чекбокс к каждому айтему и зачеркивать каждый айтем, когда чекбокс отмечен
// 3 - сделать кнопку возле каждого айтема для его удаления
// 4 - сделать кнопку возле каждого айтема для его дублирования (дубль идет в конец списка со своим временем)

const addItemBtnEl = document.getElementById('add-item-btn');
const itemInputEl = document.getElementById('item-content-input');
const listEl = document.getElementById('todo-list');

addItemBtnEl.onclick = () => {
    const itemValue = itemInputEl.value;
    
    if (!itemValue) return;

    const liEl = document.createElement('li');
    liEl.innerText = itemValue;

    listEl.append(liEl);
    itemInputEl.value = '';
};

console.log(Date.now());

const myDate = new Date();

console.log(`${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}`);