import React from 'react';
import NavItem from './NavItem/NavItem';
import { withStyles } from '@material-ui/styles';

const styles = {
    NavigationItems: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        // textAlign: 'center',
    }
}

const NavItems = props => {
    const classes = props
    return (
        <ul classes={classes.NavigationItems}>
        <NavItem link='/Dashboard' active={true} icon='dashboard' {...props}>Dashboard</NavItem>
        <NavItem link='/UserManagement' active={false} icon='userManagement' {...props}> User Management</NavItem>
    </ul>
    );
};

export default withStyles(styles) (NavItems);