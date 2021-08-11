import React from 'react';
import {
    Link
} from 'react-router-dom';

const SideBar = ({ onLogout }) => (<aside className="menu">
    <div className="nes-container is-rounded">
        <h3>
            <Link to='/'># Home</Link>
        </h3>
        <h3>
            <Link to='/profile'># Profile</Link>
        </h3>
        <h3>
            <a href="" onClick={onLogout}># Log out</a>
        </h3>
        <section className="menu-tweet-action">
            <button type="button" className="nes-btn is-primary tweet-btn">
                tweet
            </button>
            <dialog className="nes-dialog" id="dialog-default">
                <form method="dialog">
                    <label for="textarea_field">What's happening?</label>
                    <textarea id="textarea_field" className="nes-textarea"></textarea>
                    <menu className="dialog-menu">
                        <button className="nes-btn">Cancel</button>
                        <button className="nes-btn is-primary">Tweet</button>
                    </menu>
                </form>
            </dialog>
        </section>
    </div>
</aside>);

export default SideBar;
