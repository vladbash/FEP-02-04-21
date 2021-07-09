const loginInputEl = document.getElementById('login-input');
const passwordInputEl = document.getElementById('password-input');
const signInBtnEl = document.getElementById('sign-in-btn');
const errorMessageEl = document.getElementById('error-message');

const validateInputs = () => {
    if (loginInputEl.value && passwordInputEl.value) {
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

const checkUserCredentials = (login, password, onSuccess, onFail) => {
    const requestBody = {
        email: login,
        password: password
    };
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://reqres.in/api/login');
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.send(JSON.stringify(requestBody));

    xhr.onload = (e) => {
        const status = e.target.status;
        if (status >= 200 && status < 400) {
            onSuccess(JSON.parse(e.target.response));
        } else {
            onFail(JSON.parse(e.target.response));
        }
    };
};

const checkUserCredentialsPromise = (login, password) => {
    const requestBody = {
        email: login,
        password: password
    };
    
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://reqres.in/api/login');
        xhr.setRequestHeader('content-type', 'application/json');

        xhr.send(JSON.stringify(requestBody));

        xhr.onload = (e) => {
            const status = e.target.status;
            if (status >= 200 && status < 400) {
                resolve(JSON.parse(e.target.response));
            } else {
                reject(JSON.parse(e.target.response));
            }
        };
    });
    
};

const getTransationsList = () => new Promise((res, rej) => {
    setTimeout(() => {
        // res([
        //     { amount: 300, date: new Date() }
        // ]);
        rej('error!!');
    }, 300);
});

signInBtnEl.addEventListener('click', () => {
    const login = loginInputEl.value;
    const password = passwordInputEl.value;

    checkUserCredentialsPromise(login, password)
        .then(e => {
            console.log('then was applied');
            document.getElementById('login-form').remove();
            document.getElementById('main-block').classList.remove('hidden');
        })
        .catch(e => {
            console.log('catch was applied');
            errorMessageEl.classList.remove('hidden');
        })
        .then(() => {
            return getTransationsList();
        })
        .then(e => {
            console.log(e);
        })
        .catch(e => {
            console.log('another catch was applied');
        });
});