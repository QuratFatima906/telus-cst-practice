import React from 'react';

import { withStyles } from '@material-ui/styles';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';

const styles = {
    Toolbar: {
        height: '56px',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#703b09',
        display: 'flex',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
        padding: '0 20px',
        boxSizing: 'borderBox',
        zIndex: 90,
    },
}
const Toolbar = props => {
    const { classes } = props;
    return (
        <header className={classes.Toolbar}>
            <DrawerToogle clicked={props.drawerToogleClicked} />
        </header>
    );
};

export default withStyles(styles)(Toolbar);