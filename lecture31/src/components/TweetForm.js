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
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGQ3NzQ0NDQ2Yzk2MDAxMjkzYTg3YiIsImlhdCI6MTYyODI3MjU3OCwiZXhwIjoxNjI4NDQ1Mzc4fQ.oYF_5LSs5C9M0e4EsHeOifOAkw_wf3T0_8dWx1d7JIE`;
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