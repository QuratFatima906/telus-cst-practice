import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/styles';
const styles = {
    colorPrimary: {
        color: 'rgba(242, 153, 74, 0.7)',
    }

};

const Warning = props => {
    const { classes } = props;
    return (
       <ErrorIcon className={classes.colorPrimary}/>
    );
};

export default withStyles(styles) (Warning);