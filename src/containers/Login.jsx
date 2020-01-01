import React from 'react';

import Header from '../components/Headers/HeaderLogin/HeaderLogin';
import FooterLogin from '../components/Footer/FooterLogin';
import { withStyles } from '@material-ui/styles';
import InputForm from '../components/InputForm/InputForm';
import {Typography} from '@material-ui/core';

const styles = {
    root: {   
    },
    textField: {
        border: '1px solid #ccc',
    }
};

const Login = props => {
    const { classes } = props;
    return (
        <div>
            <Header />
            <div>
                <Typography variant='h5' style={{ color: '#33333380', marginTop:'20px', textAlign: 'center'}}>Your TELUS CST Login</Typography>
                <form className={classes.root} noValidate autoComplete="off">
                   <InputForm />
                </form>

            </div>
            <FooterLogin />
        </div>
    );
};

export default withStyles(styles) (Login);