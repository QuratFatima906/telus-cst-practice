import React from 'react';

import Avatar from '../Icons/Avatar/Avatar';
import Typography from '@material-ui/core/Typography';
import classes from './User.module.css';
import Grid from '@material-ui/core/Grid';

function User(props) {
    return (
        <Grid>
            <div className={classes.Align}>
                <span className={classes.Text}>
                    <Typography color='textSecondary'>
                        <b>{props.name}</b>
                    </Typography>
                    <Typography>
                        {props.designation}
                    </Typography>
                </span>
                <Avatar {...props} />
            </div>
        </Grid>
    );
}

export default User;