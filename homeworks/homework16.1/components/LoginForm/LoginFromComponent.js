export class LoginFormComponent {
    constructor(template, entryId) {
        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', template);
        this.templateEl = el;
        this.entryEl = document.getElementById(entryId);

        this.templateEl.querySelector('#login-input')
            .addEventListener('input', this.validate);
        this.templateEl.querySelector('#password-input')
            .addEventListener('input', this.validate);

        this.templateEl.querySelector('#sign-in-btn')
            .addEventListener('click', this.onSignInClick);
    }

    validate(evtObject) {
        const inputEl = evtObject.target;
        if (!inputEl.value) {
            inputEl.classList.add('is-error');
        } else {
            inputEl.classList.remove('is-error');
        }
    }

    onSignInClick() {
        alert('sign in clicked');
    }

    render() {
        Array.prototype.forEach.call(this.entryEl.children, e => e.remove());
        this.entryEl.insertAdjacentElement('afterbegin', this.templateEl);
    }
}