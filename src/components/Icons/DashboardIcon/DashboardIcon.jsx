import React from 'react';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root:{
        color: 'white',
    }
}

const DashboardIcon = props => {
    const {classes} = props;
    return (
        <DataUsageIcon className={classes.root} />
    );
};

export default withStyles(styles) (DashboardIcon);