import React from 'react';

import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
    },
    Backdrop: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 100,
        left: 0,
        top: 0,
        backgroundColor: '#00000050',
    }
};
const Backdrop = props => {

    const { classes } = props;
    return (

        props.show ? <div className={classes.Backdrop}
            onClick={props.clicked} /> : null
    );
};

export default withStyles(styles)(Backdrop);