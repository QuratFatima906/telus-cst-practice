import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import Button from '../Button/Buttons';
const styles = {
    Margin: {
        marginTop: '10px',
        marginLeft: '15px',
        alignItems: 'center',
        borderBottom: '1px solid #ccc',
    },
    Title: {
        fontSize: '21px',
    }
};
const OrgHeading = props => {

    const { classes } = props;
    return (
        <Grid
            container
            justify='space-between'
            className={classes.Margin}
        >
            <Grid item md><p className={classes.Title}>Organization - Global Profile</p></Grid>
            <Grid item md><Button background="#333333">Sync Organization</Button></Grid>
        </Grid>
    );
};

export default withStyles(styles)(OrgHeading);