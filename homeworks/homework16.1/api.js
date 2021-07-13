const API_URL = 'https://reqres.in/api';

function log(info) {
    console.log(`[api][${new Date().toISOString()}] ${info}`);
}

log('module loaded');

export const checkUserCredentials = (login, password) => {
    const requestBody = {
        email: login,
        password: password
    };

    log('user login was applied');

    return fetch(`${API_URL}/login`, {
        body: JSON.stringify(requestBody),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    }).then(e => e.json());
};

export const getUserList = (page = 1) => {

    log('get user list was applied');

    return fetch(`${API_URL}/users?page=${page}`)
        .then(e => e.json());
};
