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