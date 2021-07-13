import { LoginFormComponent } from './components/LoginForm/LoginFromComponent.js';
import { UserListComponent } from './components/UserList/UserListComponent.js';

const isUserLoggedIn = false;

if (isUserLoggedIn) {
    new UserListComponent().render();
} else {
    new LoginFormComponent(document.getElementById('login-form-tpl').innerHTML, 'main-entry').render();
}