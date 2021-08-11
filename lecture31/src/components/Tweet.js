import React from 'react';

const Tweet = ({ content, likes = 0, onLikeClick, id }) => (<div className="tweet nes-container is-rounded">
    <div className="avatar">
        <img className="nes-avatar is-rounded is-large" alt="Gravatar image example"
            src="https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg"
        />
    </div>
    <div>
        <div>
            <div className="tweet-title">
                <h5 className="tweet-name">Elon Musk</h5>
                <h5 className="tweet-nickname">@elonmusk</h5>
                <h6 className="tweet-date nes-text">1h ago</h6>
            </div>
            <p className="tweet-content">{content}</p>
        </div>
        <div className="tweet-actions-container">
            <div className="tweet-action" onClick={() => onLikeClick(id)}>
                <img className="action-icon"
                    src="https://cdn.jsdelivr.net/npm/pixelarticons@latest/svg/heart.svg"
                />
                <span className="counter">{likes}</span>
            </div>

            <div className="tweet-action">
                <img className="action-icon"
                    src="https://cdn.jsdelivr.net/npm/pixelarticons@latest/svg/forward.svg"
                />
                <span className="counter">3</span>
            </div>

            <div className="tweet-action">
                <img className="action-icon"
                    src="https://cdn.jsdelivr.net/npm/pixelarticons@latest/svg/message-reply.svg"
                />
                <span className="counter">8</span>
            </div>
        </div>
    </div>
</div>);

export default Tweet;
