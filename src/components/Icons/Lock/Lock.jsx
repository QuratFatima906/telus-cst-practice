import React from 'react';

import { withStyles } from '@material-ui/styles';
import LockIcon from '@material-ui/icons/Lock';


const styles = theme => ({
    root: {
        background: '#333333',
        minHeight: 160,
        padding: 'auto',
        margin: 'auto',
    },
    colorPrimary: {
        color: '#1b7908',
        // color: theme.primary,
    }

});
const Lock = props => {
    const { classes } = props;
    return (
        <LockIcon className={classes.colorPrimary}/>
    );
};

export default withStyles(styles) (Lock);