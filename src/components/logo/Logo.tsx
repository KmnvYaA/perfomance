import React from 'react';
import logo from '../../assets/images/logo.svg'

export const Logo = () => {
    return (
        <a href="/">
            {/*<IconBase iconId={'logo'} width="50" height="50" viewBox="0 0 1200 1200"/>*/}
            <img src={logo} alt="logo"  width="50" height="50" />
        </a>
    );
};


