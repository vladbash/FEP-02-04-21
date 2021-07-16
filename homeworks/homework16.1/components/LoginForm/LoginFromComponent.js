import { checkUserCredentials } from '../../api.js';

export class LoginFormComponent {
    constructor(template, entryId, onSuccess) {
        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', template);
        this.templateEl = el;
        this.entryEl = document.getElementById(entryId);
        this.onSuccess = onSuccess;

        this.loginInputEl = this.templateEl.querySelector('#login-input');
        this.passwordInputEl = this.templateEl.querySelector('#password-input');

        this.loginInputEl.addEventListener('input', this.validate);
        this.passwordInputEl.addEventListener('input', this.validate);

        this.templateEl.querySelector('#sign-in-btn')
            .addEventListener('click', this.onSignInClick.bind(this));
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
        const login = this.loginInputEl.value;
        const password = this.passwordInputEl.value;
        this.templateEl.querySelector('#error-message').classList.add('hidden');
        
        checkUserCredentials(login, password).then(e => {
            this.onSuccess(e);
        }).catch((e) => {
            console.log(e);
            this.templateEl.querySelector('#error-message').classList.remove('hidden');
        });
    }

    render() {
        this.entryEl.insertAdjacentElement('afterbegin', this.templateEl);
    }

    dispose() {
        this.templateEl.remove();
    }
}