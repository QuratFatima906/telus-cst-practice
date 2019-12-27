import React from 'react';
import LogoWhite from '../../Images/logo.png';
import LogoColor from '../../Images/logoImg.png';


function Logo(props) {
    return (
    (props.color) ? <a href='/'><img src={LogoColor} alt='Telus CST Color' {...props}/></a>: <a href='/'><img src={LogoWhite} alt='Telus CST' {...props}/></a>
    );
}

export default Logo;