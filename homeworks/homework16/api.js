(function () {
    const API_URL = 'https://reqres.in/api';

    const checkUserCredentials = (login, password) => {
        const requestBody = {
            email: login,
            password: password
        };

        return fetch(`${API_URL}/login`, {
            body: requestBody,
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }).then(e => e.json());
    };

    const getUserList = (page = 1) => {
        return fetch(`${API_URL}/users?page=${page}`)
            .then(e => e.json());
    };
})();