export class UserListComponent {
    constructor(template, entryId) {
        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', template);
        this.templateEl = el;
        this.entryEl = document.getElementById(entryId);
    }

    render() {
        this.entryEl.insertAdjacentElement('afterbegin', this.templateEl);
    }
}