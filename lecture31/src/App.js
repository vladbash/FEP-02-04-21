import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {
    Home,
    Login,
    Profile
} from './pages';

import './styles/main.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isAuth: !!localStorage.getItem('token')
        };
    }

    onLogin = (token) => {
        localStorage.setItem('token', token);
        this.setState({
            isAuth: true
        });
    };

    onLogout = () => {
        localStorage.removeItem('token');
        this.setState({
            isAuth: false
        });
    };

    render() {
        const { isAuth } = this.state;
        return <Router>
            <Switch>
                    <Route path='/' exact>
                        {isAuth ? <Home onLogout={this.onLogout} /> : <Redirect to='/login' /> }
                    </Route>
                    <Route path='/profile'>
                        {isAuth ? <Profile /> : <Redirect to='/login' /> }
                    </Route>
                    <Route path='/login'>
                        {isAuth ? <Redirect to='/' /> : <Login onAuth={this.onLogin} />}
                    </Route>
            </Switch>
        </Router>;
    }
}

export default App;