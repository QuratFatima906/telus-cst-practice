import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const Menu = (props) => {
    return (
        (props.open) ? <MenuOpenIcon {...props} /> : <MenuIcon {...props} />
    );
}

export default Menu;