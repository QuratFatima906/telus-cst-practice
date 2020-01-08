import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { Redirect } from 'react-router-dom';

import {
    InputBase,
    InputLabel,
    Typography,
    Checkbox,
    FormGroup,
    FormControlLabel
} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import OwlImage from '../../Images/WhiteOwls.png';
import Button from '../Button/Buttons';

const styles = {
    root: {
        // height: '62vh',
        padding: '20px',
    },
    input: {
        borderRadius: 5,
        border: '1px solid #ced4da',
        paddingLeft: '10px',
        textAlign: 'left',
        width: '100%',
        // width: '250px',
        marginTop: '10px',
    },
    formContainer: {
        height: '100%',
        maxWidth: '45%',
        margin: 'auto',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: 5,
        border: '1px solid #5bc60450'
    },
    left: {
        marginTop: '20px',
        paddingLeft: '10px',
    },
    right: {
        marginLeft: '20px',
        margin: 'auto',
    },

};

function InputForm(props) {
    const { classes } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Login() {
        let Data = {
            'deviceInfo': {
                'deviceId': 'NENRNE4434NN34',
                'deviceType': 'DEVICE_TYPE_WEB',
                'notificationToken': 'NNENRNE4434NN34'
            },
            'email': email,
            'password': password,
        }
        // console.log(props);
        axios.post('auth/login', Data)
            .then(res => {
             localStorage.setItem('token', res.data.token.accessToken);
             props.history.push('/Dashboard');
             return <Redirect to='/Dashboard'></Redirect>
            })
            .catch(err => {
                alert(err);
            });
    };
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e.target);
        Login();

    }
    // useEffect(Login);

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <Grid container className={classes.formContainer}>
                    <Grid item className={classes.left} sm={12} md={5}>

                        <Typography variant='h5' component='h5' style={{ textAlign: 'left', color: '#33333380' }}>Log in</Typography>
                        <InputLabel style={{ marginTop: '20px', textAlign: 'left' }}>Email/Username</InputLabel>
                        <InputBase
                            className={classes.input}
                            placeholder='Email/Username'
                            inputProps={{ 'aria-label': 'Email/Username' }}
                            type='text'
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <InputLabel style={{ marginTop: '20px', textAlign: 'left' }}>Password</InputLabel>
                        <InputBase
                            className={classes.input}
                            placeholder='Password'
                            inputProps={{ 'aria-label': 'Email/Username' }}
                            type='password'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                            style={{ marginTop: '20px', color: '#33333380' }}
                        />
                        <Button type='submit' background='#1b7908' style={{ marginTop: '20px' }}>Continue</Button>

                    </Grid>
                    <Grid item className={classes.right} sm={12} md={5}>
                        <Typography variant='h5' style={{ color: '#33333380', marginTop: '40px' }}>Customer Service Toolkit Ver. 4.0</Typography>
                        <img src={OwlImage} alt='White Owls' className={classes.image}></img>
                    </Grid>

                </Grid>
            </form>
        </div>
    );
};

export default withStyles(styles)(InputForm);