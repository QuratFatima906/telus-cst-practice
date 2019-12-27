import React from 'react';

import Grid from "@material-ui/core/Grid";
import Logo from '../../Logo/Logo';
import SearchBar from '../../SearchBar/SearchBar';
import User from '../../User/User';
import image from '../../../Images/placeholder.jpg';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        background: '#422462',
        Height: 54,
    },

};
const Header = props => {
    const { classes } = props;
    return (
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Logo />
        <SearchBar placeholder="Search By" />
        <User src={image} name="Qurat Ul Ain Fatima" designation="Admin CST" />
      </Grid>
    );
};

export default withStyles(styles) (Header);