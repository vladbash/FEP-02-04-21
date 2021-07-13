import { checkUserCredentials, getUserList } from './api.js';
import render from './render.js'; // -> import default from './some-script.js';

// const loginInputEl = document.getElementById('login-input');
// const passwordInputEl = document.getElementById('password-input');
// const signInBtnEl = document.getElementById('sign-in-btn');
// const errorMessageEl = document.getElementById('error-message');
// const userListEl = document.getElementById('user-list');
// const userListItemTpl = document.getElementById('user-list-item-tpl').innerText;

const validateInputs = () => {
    if (loginInputEl.value && passwordInputEl.value) {
        signInBtnEl.classList.remove('is-disabled');
        signInBtnEl.removeAttribute('disabled');
    } else {
        signInBtnEl.classList.add('is-disabled');
        signInBtnEl.setAttribute('disabled', 'disabled');
    }
};

// With eventObject.target
const validateInput = evtObject => {
    const inputEl = evtObject.target;
    errorMessageEl.classList.add('hidden');
    if (!inputEl.value) {
        inputEl.classList.add('is-error');
    } else {
        inputEl.classList.remove('is-error');
    }
    validateInputs();
}

// const onLoginChange = validateInput(loginInputEl);
loginInputEl.addEventListener('blur', validateInput);
loginInputEl.addEventListener('input', validateInput);

// const onPasswordChange = validateInput(passwordInputEl);
passwordInputEl.addEventListener('blur', validateInput);
passwordInputEl.addEventListener('input', validateInput);

signInBtnEl.addEventListener('click', () => {
    const login = loginInputEl.value;
    const password = passwordInputEl.value;

    checkUserCredentials(login, password)
        .then(e => {
            console.error(e);
            console.log('then was applied');
            document.getElementById('login-form').remove();
            document.getElementById('main-block').classList.remove('hidden');
        })
        .catch(e => {
            console.log('catch was applied');
            errorMessageEl.classList.remove('hidden');
            throw new Error('Auth error');
        })
        .then(() => {
            return getUserList();
        })
        .then(e => {
            console.log(e);
            const list = e.data.reduce((res, e) => {
                return res + '\n' + render(userListItemTpl, e);
            }, '');

            userListEl.insertAdjacentHTML('beforeend', list);
        })
        .catch(e => {
            console.log('another catch was applied');
        });
});
