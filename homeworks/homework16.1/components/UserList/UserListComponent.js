import Component from "../../core/Component.js";
import renderTemplate from "../../core/utils/render.js";

export class UserListComponent extends Component {
    constructor(template, entryId, onLogOut) {
        super(template, entryId);

        this.getElementById('logout-btn').addEventListener('click', onLogOut);
    }

    setState(users = []) {
        const listEl = this.getElementById('list');
        const liTmp = listEl.firstElementChild.outerHTML;

        listEl.innerHTML = users.reduce((tpl, e) => {
            return tpl + renderTemplate(liTmp, e);
        }, '');
    }

}