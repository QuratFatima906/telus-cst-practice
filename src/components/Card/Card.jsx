import React from 'react';

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
        borderBottom: '3px solid #27AE60',
        // '&:hover': {
        //     background: 'rgba(39, 174, 96, 0.1)',
    },
    Card: {
        marginLeft: '3px',
        marginRight: '3px',
    }

};

const CardContainer = props => {
    const { classes } = props;
    return (
        <Grid item xm={12} md={5} spacing={2}>
            <Card className={classes.Card}>
                <CardActionArea className={props.active ? classes.Active : classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
          </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default withStyles(styles)(CardContainer);