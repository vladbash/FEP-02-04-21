const USERS = [
    { login: 'admin', password: 'password' },
    { login: 'mod', password: 'password1' },
    { login: 'admin2', password: 'Pa$$word' },
    { login: 'user', password: '1234' },
];

const loginInputEl = document.getElementById('login-input');
const passwordInputEl = document.getElementById('password-input');
const signInBtnEl = document.getElementById('sign-in-btn');
const errorMessageEl = document.getElementById('error-message');

const validateInputs = () => {
    if (!!loginInputEl.value && !!passwordInputEl.value) {
        signInBtnEl.classList.remove('is-disabled');
        signInBtnEl.removeAttribute('disabled');
    } else {
        signInBtnEl.classList.add('is-disabled');
        signInBtnEl.setAttribute('disabled', 'disabled');
    }
};

// With closure
// const validateInput = inputEl => {
//     return () => {
//         errorMessageEl.classList.add('hidden');
//         if (!inputEl.value) {
//             inputEl.classList.add('is-error');
//         } else {
//             inputEl.classList.remove('is-error');
//         }
//         validateInputs();
//     };
// };

// With eventObject.target
const validateInput = evtObject => {
    const inputEl = evtObject.target;
    // console.log(evtObject);
    // evtObject.target.remove();
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

const checkUserCredentials = (login, password) => {
    return !!USERS.find(e => e.login === login && e.password === password);
};

signInBtnEl.addEventListener('click', () => {
    const login = loginInputEl.value;
    const password = passwordInputEl.value;

    if (checkUserCredentials(login, password)) {
        document.getElementById('login-form').remove();
        document.getElementById('main-block').classList.remove('hidden');
    } else {
        errorMessageEl.classList.remove('hidden');
    }
});