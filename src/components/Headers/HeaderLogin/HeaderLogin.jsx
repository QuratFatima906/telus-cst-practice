import React from 'react';

import Grid from "@material-ui/core/Grid";
import Logo from '../../Logo/Logo';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        background: '#fff',
        height: 85,
        boxShadow: '1px 1px 3px 0.5px #f2f2f2',
        padding: '10px 0 10px 40px',
    },
    Logo: {
        // margin: 'auto 40px',

    }

};
const HeaderLogin = props => {
    const { classes } = props;
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.root}
        >
            <Logo color='true' className={classes.Logo}/>
        </Grid>
    );
};

export default withStyles(styles)(HeaderLogin);