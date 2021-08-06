import React, { Component } from 'react';
import {
    Header,
    SideBar,
    TweetForm,
    Feed,
    Main
} from './components';

import './styles/main.scss';

class App extends Component {
    render() {
        return <>
            <Header />
            <Main>
                <SideBar />
                <div className="feed">
                    <TweetForm />
                    <Feed />
                </div>
            </Main>
        </>;
    }
}

export default App;