import React from 'react';

import Header from '../components/Headers/HeaderLogin/HeaderLogin';
import FooterLogin from '../components/Footer/FooterLogin';
import { withStyles } from '@material-ui/styles';
import InputForm from '../components/InputForm/InputForm';

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
                <form className={classes.root} noValidate autoComplete="off">
                   <InputForm />
                </form>

            </div>
            <FooterLogin />
        </div>
    );
};

export default withStyles(styles) (Login);