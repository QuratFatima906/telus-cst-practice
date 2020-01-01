import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        background: '#F2F2F2',
        // '&:hover': {
        //     background: 'rgba(39, 174, 96, 0.1)',
        // },
    },
    Active: {
        background: 'rgba(39, 174, 96, 0.1)',
        '&:hover': {
            background: 'rgba(39, 174, 96, 0.1)',
        },
        borderBottom: '3px solid #27AE60',
    },
    Card: {
        marginLeft: '15px',
        marginTop: '10px',
    },
    MarginTop: {
        marginTop: '15px',
        margginBottom: 0,
    },


};


const CardContainer = props => {
    let [active, setActive] = useState(props.active);
    const changeActiveCard = () => {
        if (active) {
            return () => setActive(false);
        }
        else {
            return () => setActive(true);
        }
    }
    const { classes } = props;
    return (
        <Grid item md>
            <Card className={classes.Card}>
                <CardActionArea className={active ? classes.Active : classes.root}>
                    <CardContent>
                        <Grid container justify="space-between">
                            <Grid item>
                                <Typography variant="h5">{props.orgName}</Typography>
                                <p className={classes.MarginTop}>Total No. of SIMS: <b>{props.numOfSims}</b></p>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5">{props.status}</Typography>
                                <p className={classes.MarginTop}>Total SIMS activated: <b>{props.simsActivated}</b></p>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default withStyles(styles)(CardContainer);