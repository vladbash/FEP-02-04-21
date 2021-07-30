import Component from "../../core/Component.js";
import renderTemplate from "../../core/utils/render.js";
import { deleteUser, createUser } from '../../api.js';

export class UserListComponent extends Component {
    constructor(template, entryId, onLogOut) {
        super(template, entryId);

        this.getElementById('logout-btn').addEventListener('click', onLogOut);

        this.state = {
            list: [],
            user: {}
        };

        this.addListener('#list', 'click', e => {
            e.target.classList.contains('delete') && this.onDelete(e);
            e.target.classList.contains('update') && this.onUpdateOpen(e);
            // if (e.target.classList.contains('delete')) {
            //     this.onDelete(e);
            // }
        });

        this.addListener('#create-user-btn', 'click', e => {
            this.setState({
                user: {
                    first_name: '',
                    last_name: ''
                }
            });

            this.openUserModal();
        });

        this.addListener('#user-form', 'click', e => {
            if (e.target.classList.contains('is-primary')) {
                e.preventDefault();
                this.onUserUpdateConfirm();
            }
        });
    }

    onUserUpdateConfirm() {
        const { user } = this.state;

        const name = this.realQuerySelector('#name_field').value;
        const job = this.realQuerySelector('#job_field').value;

        createUser(name, job);
    }

    onDelete(evt) {
        const id = evt.target.parentElement.dataset['id'];

        deleteUser(id).then(e => {
            this.setState({
                list: this.state.list.filter(e => +e.id !== +id),
            });
        });        
    }

    openUserModal() {
        const userFormEl = this.getRealElementById('user-form');
        userFormEl.showModal();
    }

    onUpdateOpen(evt) {
        const id = evt.target.parentElement.dataset['id'];

        this.setState({
            user: this.state.list.find(e => +e.id === +id)
        });

        this.openUserModal();
    }

    render() {
        const { list, user } = this.state;

        super.render();

        const listEl = this.getRealElementById('list');
        const liTpl = this.querySelector('#list > li').outerHTML;

        const userFormEl = this.getRealElementById('user-form');
        const userFormTpl = this.querySelector('#user-form').innerHTML;
        
        userFormEl.innerHTML = renderTemplate(userFormTpl, user);

        listEl.innerHTML = list.reduce((tpl, e) => {
            return tpl + renderTemplate(liTpl, e);
        }, '');
    }

}