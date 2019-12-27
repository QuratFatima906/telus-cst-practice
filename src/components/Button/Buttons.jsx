import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//reference from https://material-ui.com/styles/basics/

const useStyles = makeStyles({
  root: props => ({
    background: props.background,
    '&:hover': {
      background: props.background,
  },
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
  }),
});

const Buttons = props => {
  const classes = useStyles(props);
return <Button className={classes.root} {...props} >{props.children}</Button>;
}

export default Buttons;