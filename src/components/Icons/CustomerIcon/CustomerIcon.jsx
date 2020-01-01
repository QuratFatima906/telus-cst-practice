import React from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root:{
        color: 'white',
    }
}

const CustomerIcon = props => {
    const {classes} = props;
    return (
       <PeopleAltIcon className={classes.root}/>
    );
};

export default withStyles(styles)(CustomerIcon);