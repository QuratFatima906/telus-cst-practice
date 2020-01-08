import React from 'react';
import classes from './NavItem.module.css';
import Dashboard from '../../../Icons/DashboardIcon/DashboardIcon';
import UserManagement from '../../../Icons/CustomerIcon/CustomerIcon';
import {Link } from 'react-router-dom';
const NavItem = props => {

    // const { classes } = props;
    let Nav = '';
    Nav = (props.expanded) ? <Link
        to={props.link}
        className={props.active ? classes.active : ' '}
        style={{ marginLeft: '10px' }}>
        {props.children}
    </Link> : '';

    let icon = (props.icon === 'dashboard') ? <Dashboard {...props} /> : <UserManagement {...props} />;

    return (
        <li className={classes.NavigationItem}>
            {icon}
            {Nav}
        </li>
    );
};

export default NavItem;