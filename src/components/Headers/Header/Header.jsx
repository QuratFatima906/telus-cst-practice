import React from 'react';

import Logo from '../../Logo/Logo';
import SearchBar from '../../SearchBar/SearchBar';
import User from '../../User/User';
import image from '../../../Images/WhiteOwls.png';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '../../Icons/MenuIcon/MenuIcon';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#422462',
    // Height: 54,
    zIndex: 10,
    color: 'white',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },

}));
const Header = props => {
  const classes = useStyles();
  return (
    // <Grid
    //   container
    //   direction="row"
    //   justify="space-around"
    //   alignItems="center"
    //   className={classes.root}
    // >
    //   <MenuIcon />
    //   <span style={{ display: 'flex', alignItems: 'center' }}>
    //     <Logo />
    //     <Typography >Customer Service Toolkit Ver. 4.0</Typography>
    //   </span>
    //   <SearchBar placeholder="Search By" />
    //   <User src={image} name="Qurat Ul Ain Fatima" designation="Admin CST" />
    // </Grid>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon className={classes.menuButton} open={props.isOpen} menuClicked={props.menuClicked}/>
          <span style={{ display: 'flex', alignItems: 'center' }} className={classes.title}>
            <Logo />
            <Typography >Customer Service Toolkit Ver. 4.0</Typography>
          </span>
          {/* <SearchBar placeholder="Search By" className={classes.inputInput} /> */}
          <User src={image} name="Qurat Ul Ain Fatima" designation="Admin CST" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;