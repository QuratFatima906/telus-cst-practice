import React from 'react';
import LogoWhite from '../../Images/logo.png';
import LogoColor from '../../Images/logoImg.png';
import { Link } from 'react-router-dom';


function Logo(props) {
    return (
    (props.color) ? <Link to='/'><img src={LogoColor} alt='Telus CST Color' {...props}/></Link>: <Link to='/'><img src={LogoWhite} alt='Telus CST' {...props}/></Link>
    );
}

export default Logo;