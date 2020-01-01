import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { withStyles } from '@material-ui/styles';

const styles = {
    colorPrimary: {
        color: '#1b7908',
    }
};

const Menu = (props) => {
    // const { classes } = props;
    return (
        (props.open) ? <MenuOpenIcon onClick={props.menuClicked} /> : <MenuIcon onClick={props.menuClicked} />
    );
}

export default withStyles(styles)(Menu);