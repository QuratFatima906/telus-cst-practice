import React from 'react';

import Grid from "@material-ui/core/Grid";
import Logo from '../../components/Logo/Logo';
import { withStyles } from '@material-ui/styles';
import Lock from '../Icons/Lock/Lock';
import { Typography } from '@material-ui/core';

const styles = {
    root: {
        background: '#333333',
        minHeight: 160,
        padding: 'auto',
        margin: 'auto',
    },
    content: {
        margin: 'auto',
    },
    flex: {
        display: 'flex',
        margin: 'auto',
    },
    typography: {
        color: '#ffffff',
        margin: '5px',
        fontWeight: '300',
        fontSize: '14px',
    },
    copyright: {
        color: '#ffffff50',
        fontSize: '12px',
    },
    logo:{
        width: '60%',
        marginTop: '20px',
    }

};
const FooterLogin = props => {
    const { classes } = props;
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.root}
        >
            <div className={classes.content}>
                <span className={classes.flex}><Lock /> <Typography component="p" className={classes.typography} >This is a secure page</Typography></span>
                <Logo className={classes.logo}/>
                <Typography component="p" className={classes.copyright}>© 2019 TELUS Communication Inc.</Typography>
            </div>

        </Grid>
    );
};

export default withStyles(styles)(FooterLogin);