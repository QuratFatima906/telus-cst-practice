import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Aux from '../../Hoc/Auxiliary/Auxiliary';
import Grid from '@material-ui/core/Grid';

const SearchBar = props => {
    const [ID, setID] = React.useState('ICCID');
    const handleChange = event => {
        setID(event.target.value);
    };
    const useStyles = makeStyles(theme => ({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            minWidth: 110,
            position: 'relative',
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
            borderRadius: 50,
            border: '1px solid #ced4da',
            backgroundColor: theme.palette.background.paper,
            paddingLeft: '10px',
            width: '350px',
        },
        iconButton: {
            padding: 10,
        },
        formControl: {
            minWidth: 110,
            backgroundColor: '#5bc604',
            color: '#ffffff',
            padding: 0,
            border: 'none',
        },
    }));
    const classes = useStyles();
    return (
        <Aux>
            <Grid item>
                <InputBase
                    className={classes.input}
                    placeholder={props.placeholder}
                    inputProps={{ 'aria-label': props.placeholder }}
                />
                <FormControl className={classes.formControl}>
                    <Select
                        labelId="Search ID"
                        id=''
                        value={ID}
                        onChange={handleChange}
                    >
                        <MenuItem value='ICCID'>ICCID</MenuItem>
                        <MenuItem value='E-ID'>E-ID</MenuItem>
                    </Select>
                </FormControl>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Grid>
        </Aux>
    );
};

export default SearchBar;