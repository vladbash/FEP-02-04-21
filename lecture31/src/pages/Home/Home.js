import React, { Component } from 'react';
import {
    Header,
    SideBar,
    TweetForm,
    Feed,
    Main
} from '../../components';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            tweets: []
        };
    }

    componentDidMount() {
        fetch('http://143.198.136.212/api/tweets/public')
            .then(e => e.json())
            .then(e => {
                this.setState({
                    tweets: e
                });
            });
    }

    onTweetAdd = tweet => {
        this.setState({
            tweets: [tweet, ...this.state.tweets]
        });
    };

    render() {
        return (
            <>
                <Header />
                <Main>
                    <SideBar onLogout={this.props.onLogout} />
                    <div className="feed">
                        <TweetForm onCreate={this.onTweetAdd}/>
                        <Feed tweets={this.state.tweets}/>
                    </div>
                </Main>
            </>
        );
    }
}

export default Home;