function Accordion(element) {
    /*
        Provide code here
        1 - блоки по-умолчанию должны быть закрыты
        2 - сделать следующие методы
            - toggle(index) - открываем/закрываем блок по индексу
            - addBlock(title, description) - добавляем новый блок
            - getOpenIndexes() - возвращает индексы открытых блоков
            - closeAll() - закрывает все блоки
            - openAll() - открывает все блоки
    */

    this.element = element;
    this.init = accordionInit;
    this.toggle = toggleItem;
    this.addBlock = addBlock;

    this._onItemClick = function (evtObj) {
        evtObj.target.parentElement.classList.toggle('extended');
    };

    this.element.addEventListener('click', this._onItemClick.bind(this));
}

function accordionInit() {
    Array.prototype.forEach.call(this.element.children, e => {
        e.classList.add('accordion-item');
        if (e.children.length >= 2) {
            e.children[0].classList.add('title');
            e.children[1].classList.add('content');
        } else {
            throw new Error('Invalid accordion item');
        }
    });
}

function toggleItem(index) {
    const element = this.element.children[index];
    if (element) {
        element.classList.toggle('extended');
    }
}

function addBlock(title, description) {
    this.element.insertAdjacentHTML('beforeEnd', `<div class="accordion-item">
        <div class="title">${title}</div>
        <div class="content">${description}</div>
    </div>`);
}

const mainAccordion = new Accordion(document.getElementById('accordion'));
mainAccordion.init();

mainAccordion.toggle(10);

setTimeout(() => {
    mainAccordion.addBlock('new element', 'element content');
}, 3000);