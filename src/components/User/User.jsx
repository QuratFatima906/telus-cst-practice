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
                    <Typography>
                        <b>{props.name}</b>
                    </Typography>
                    <Typography>
                        {props.designation}
                    </Typography>
                </span>
                <Avatar src={props.src} />
            </div>
        </Grid>
    );
}

export default User;