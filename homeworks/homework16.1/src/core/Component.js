import moment from 'moment';

export default class Component {
    constructor(template, entryId) {
        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', template);
        this._componentEl = el;

        const virtEl = document.createElement('div');
        virtEl.insertAdjacentHTML('afterbegin', template);
        this._virtualTemplate = virtEl;

        this._entryEl = document.getElementById(entryId);

        this.state = {};

        this.eventList = {};
    }

    getElementById(id) {
        return this._virtualTemplate.querySelector(`#${id}`);
    }

    querySelector(selector) {
        return this._virtualTemplate.querySelector(selector);
    }

    getRealElementById(id) {
        return this._componentEl.querySelector(`#${id}`);
    }

    realQuerySelector(selector) {
        return this._componentEl.querySelector(selector);
    }

    addListener(selector, event, cb) {
        this.eventList[selector] = {
            ...this.eventList[selector],
            [event]: [ 
                ...(this.eventList[selector] ? this.eventList[selector][event] : []),
                cb
            ]
        };
    }

    _initEvents() {
        Object.keys(this.eventList).forEach(e => {
            const el = this.realQuerySelector(e);
            Object.keys(this.eventList[e]).forEach(event => {
                this.eventList[e][event].forEach(cb => {
                    el.addEventListener(event, cb);
                });
            });
        });
    }

    setState(state) {
        this.state = {
            ...this.state,
            ...state
        };

        this.render();
    }

    render() {
        this._entryEl.insertAdjacentElement('afterbegin', this._componentEl);
        this._initEvents();
    }

    dispose() {
        this._componentEl.remove();
    }
}