export default class Component {
    constructor(template, entryId) {
        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', template);
        this._componentEl = el;
        this._entryEl = document.getElementById(entryId);
    }

    getElementById(id) {
        return this._componentEl.querySelector(`#${id}`);
    }

    render() {
        this._entryEl.insertAdjacentElement('afterbegin', this._componentEl);
    }

    dispose() {
        this._componentEl.remove();
    }
}