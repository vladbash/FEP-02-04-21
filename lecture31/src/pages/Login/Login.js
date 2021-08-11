import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: ''
        };
    }

    onLoginInput = e => {
        this.setState({
            login: e.target.value
        });
    };

    onPasswordInput = e => {
        this.setState({
            password: e.target.value
        });
    };

    onFormSubmit = () => {
        const {
            login,
            password
        } = this.state;

        const {
            onAuth
        } = this.props;

        fetch('http://143.198.136.212/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: login,
                password
            }),
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(e => e.json())
            .then(({ token }) => {
                onAuth(token);
            });
    };


    render() {
        const {
            login,
            password
        } = this.state;
        return (
            <div className="container">
                <div className="nes-container actions-form-container block" id="login-form">
                    {/* <span className="nes-text is-error hidden" id="error-message">Incorrect credentials</span> */}
                    <div className="nes-field">
                        <label for="item-content-input">Login: </label>
                        <input onInput={this.onLoginInput} type="text" id="login-input" className="nes-input" value={login}/>
                    </div>
                    <div className="nes-field">
                        <label for="item-content-input">Password: </label>
                        <input onInput={this.onPasswordInput} type="password" id="password-input" className="nes-input" value={password}/>
                    </div>
                    <button onClick={this.onFormSubmit} type="button" id="sign-in-btn" className="nes-btn is-primary actions-form-btn"
                        >Sign In</button>
                </div>
            </div>
        );
    }
}

export default Login;