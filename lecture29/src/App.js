import React, { Component } from 'react';
import Logo from './Logo';
import UserList from './UserList';

import './styles/main.scss';

// const App = () => {
//     return <h1>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         {new Date().toISOString()}
//     </h1>;
// };

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Alex',
            fullLogo: true,
        };

        this.onBtnClick = () => {
            console.log('btn was clicked');
            this.setState({
                fullLogo: !this.state.fullLogo
            });
            // DON'T DO THAT
            // this.state.fullLogo = false;
            // this.forceUpdate();
        };
    }

    render() {
        const { fullLogo, name } = this.state;
        return <div>
            <h1>Hello from Class, {name}!</h1>
            <Logo name="app-logo" amount={1} full={fullLogo} onLogoStateChange={this.onBtnClick} />
            {fullLogo ? <UserList /> : null}
        </div>;
    }
}

export default App;