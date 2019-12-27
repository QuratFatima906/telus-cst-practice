import React from 'react';

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
        padding: '40px',
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
    image: {

    }

};

const InputForm = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container className={classes.formContainer}>
                <Grid item className={classes.left} sm={12} md={5}>
                    <Typography variant='h5' component='h5' style={{ textAlign: 'left', color: '#33333380' }}>Log in</Typography>
                    <InputLabel style={{ marginTop: '20px', textAlign: 'left' }}>Email/Username</InputLabel>
                    <InputBase
                        className={classes.input}
                        placeholder='Email/Username'
                        inputProps={{ 'aria-label': 'Email/Username' }}
                        type='text'
                    />
                    <InputLabel style={{ marginTop: '20px', textAlign: 'left' }}>Password</InputLabel>
                    <InputBase
                        className={classes.input}
                        placeholder='Password'
                        inputProps={{ 'aria-label': 'Email/Username' }}
                        type='password'
                    />
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                            style={{marginTop:'20px', color:'#33333380'}}
                        />
                    </FormGroup>
                    <Button background='#1b7908' style={{ marginTop: '20px' }}>Continue</Button>
                </Grid>
                <Grid item className={classes.right} sm={12} md={5}>
                    <Typography variant='h5' style={{ color: '#33333380', marginTop: '40px' }}>Customer Service Toolkit Ver. 4.0</Typography>
                    <img src={OwlImage} alt='White Owls' className={classes.image}></img>
                </Grid>

            </Grid>

        </div>
    );
};

export default withStyles(styles)(InputForm);