import { LoginFormComponent } from './components/LoginForm/LoginFromComponent.js';
import { UserListComponent } from './components/UserList/UserListComponent.js';
import { getUserList } from './api.js';

const isUserLoggedIn = localStorage.getItem('token');
console.log(isUserLoggedIn);

const loginComponent = new LoginFormComponent(
    document.getElementById('login-form-tpl').innerHTML,
    'main-entry',
    onSuccessLogin
);
const userListComponent = new UserListComponent(
    document.getElementById('user-list-item-tpl').innerHTML,
    'main-entry',
    onLogOut
);

function onSuccessLogin({ token }) {
    localStorage.setItem('token', token);
    loginComponent.dispose();
    loadUsers();
}

function onLogOut() {
    localStorage.removeItem('token');
    userListComponent.dispose();
    loginComponent.render();
}

function loadUsers() {
    getUserList().then(({ data }) => {
        userListComponent.setState(data);
        userListComponent.render();
    }).then(() => {
        setTimeout(() => {
            userListComponent.setState([
                {
                    avatar: "https://reqres.in/img/faces/1-image.jpg",
                    email: "george.bluth@reqres.in",
                    first_name: "Test",
                    id: 1,
                    last_name: "Test",
                }
            ]);
            userListComponent.render();
        }, 3000);
    });
}

if (isUserLoggedIn) {
    loadUsers();
} else {
    loginComponent.render();
}