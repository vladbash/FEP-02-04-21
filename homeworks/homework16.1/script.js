import { LoginFormComponent } from './components/LoginForm/LoginFromComponent.js';
import { UserListComponent } from './components/UserList/UserListComponent.js';

const isUserLoggedIn = false;

const loginComponent = new LoginFormComponent(
    document.getElementById('login-form-tpl').innerHTML,
    'main-entry',
    onSuccessLogin
);
const userListComponent = new UserListComponent(
    document.getElementById('user-list-item-tpl').innerHTML,
    'main-entry'
);

function onSuccessLogin(e) {
    loginComponent.dispose();
    userListComponent.render();
}

if (isUserLoggedIn) {
    userListComponent.render();
} else {
    loginComponent.render();
}