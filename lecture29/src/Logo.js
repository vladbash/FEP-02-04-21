import React from 'react';
import logo from '../assets/logo.png';
import tinyLogo from '../assets/tiny-logo.png';

const Logo = props => {
    const {
        onLogoStateChange,
        name,
        full
    } = props;

    return <div>
        <h1>{name}</h1>
        <img
            className={full ? 'logo' : 'tiny-logo'}
            src={full ? logo : tinyLogo}
        />
        <button onClick={onLogoStateChange}>Click me!</button>
    </div>;
};

export const Title = ({ inner }) => <h1>{inner}</h1>;

export default Logo;