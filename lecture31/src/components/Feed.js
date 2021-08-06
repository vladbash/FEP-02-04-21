import React, { Component } from 'react';
import Tweet from "./Tweet";

class Feed extends Component {
    constructor() {
        super();
        this.state = {
            tweets: []
        };
    }

    componentDidMount() {
        this.setState({
            tweets: [
                {
                    id: 1,
                    content: 'test 1',
                    likes: 8
                },
                {
                    id: 2,
                    content: 'test 2',
                    likes: 867
                },
                {
                    id: 3,
                    content: 'test 3',
                    likes: 587684
                }
            ]
        })
    }

    onTweetLike = (id) => {
        const { tweets } =  this.state;
        const index = tweets.findIndex(e => e.id === id);
        tweets[index].likes++;
        this.setState({ tweets });
    };

    render() {
        const { tweets } = this.state;
        return (
            <>
                {tweets.map(e => <Tweet
                    content={e.content}
                    likes={e.likes}
                    id={e.id}
                    key={e.id}
                    onLikeClick={this.onTweetLike}
                />)}
            </>
        );
    }
}

export default Feed;