import React from 'react';
import classes from './NavItem.module.css';
import Dashboard from '../../../Icons/DashboardIcon/DashboardIcon';
import UserManagement from '../../../Icons/CustomerIcon/CustomerIcon';
const NavItem = props => {

    // const { classes } = props;
    let Nav = '';
    Nav = (props.expanded) ? <a
        href={props.link}
        className={props.active ? classes.active : ' '}
        style={{ marginLeft: '10px' }}>
        {props.children}
    </a> : '';

    let icon = (props.icon === 'dashboard') ? <Dashboard {...props} /> : <UserManagement {...props} />;

    return (
        <li className={classes.NavigationItem}>
            {icon}
            {Nav}
        </li>
    );
};

export default NavItem;