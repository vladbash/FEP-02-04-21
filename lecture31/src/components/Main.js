import React, { Component } from 'react';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            isAuth: true
        };
    }


    render() {
        const { children } = this.props;
        const { isAuth } = this.state;
        return (
            <main className="container">
                {isAuth ? children : <h1>Unauth error</h1>}
            </main>
        );
    }
}

export default Main;