import React, { Component } from 'react';
import Tweet from "./Tweet";

class Feed extends Component {
    onTweetLike = (id) => {
        // TBI
    };

    render() {
        const { tweets } = this.props;
        return (
            <>
                {tweets.map(e => <Tweet
                    content={e.content}
                    //likes={e.likes}
                    id={e._id}
                    key={e._id}
                    onLikeClick={this.onTweetLike}
                />)}
            </>
        );
    }
}

export default Feed;