import React, { Component } from 'react';

class TweetForm extends Component {
    constructor() {
        super();
        this.state = {
            content: ''
        };
    }

    onContentInput = e => {
        this.setState({
            content: e.target.value
        });
    };

    onTweetSubmit = () => {
        const token = localStorage.getItem('token');
        const { content } = this.state;
        fetch('http://143.198.136.212/api/tweets', {
            method: 'POST',
            body: JSON.stringify({
                content
            }),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(e => e.json())
            .then(e => {
                console.log(e);
                this.setState({
                    content: ''
                });
                this.props.onCreate(e);
            })
            .catch(e => {
                console.error(e);
            });
    };

    render() {
        const { content } = this.state;
        return (
            <div className="nes-container is-rounded tweet-form">
                <form method="dialog">
                    <label for="textarea_field">What's happening?</label>
                    <textarea
                        className="nes-textarea"
                        value={content}
                        onInput={this.onContentInput}
                    ></textarea>
                    <menu className="dialog-menu tweet-form-actions">
                        <button onClick={this.onTweetSubmit} className="nes-btn is-primary">Tweet</button>
                    </menu>
                </form>
            </div>
        );
    }
}

export default TweetForm;