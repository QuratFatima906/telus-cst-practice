import React from 'react';

import Aux from '../../../Hoc/Auxiliary/Auxiliary';
import { withStyles } from '@material-ui/styles';
import SideDrawerExpanded from './SideDrawerExpanded';
import SideDrawerFixed from './SideDrawerFixed';

const styles = {
    root:{
        color: 'white',
        alignItems: 'center',
    },
    SideDrawerExpanded: {
        position: 'fixed',
        width: '205px',
        maxWidth: '70%',
        height: '100%',
        left: 0,
        top: 64,
        zIndex: 200,
        backgroundColor: '#595959',
        padding: '32px 16px',
        boxSizing: 'borderBox',
        transition: 'transform 0.3s ease-out',
        // marginTop: '64px',
        alignItems: 'center',
    },
    SideDrawer: {
        position: 'fixed',
        width: '40px',
        maxWidth: '70%',
        height: '100%',
        left: 0,
        top: 64,
        zIndex: 200,
        backgroundColor: '#595959',
        padding: '32px 16px',
        boxSizing: 'borderBox',
        transition: 'transform 0.3s ease-out',
        // marginTop: '64px',
        alignItems: 'center',
    },
};

const SideDrawer = props => {
    const { classes } = props;
    let attachedClasses = '';
    attachedClasses = (props.open) ? classes.SideDrawerExpanded : classes.SideDrawer;
    let drawer = (props.open) ? <SideDrawerExpanded {...props} /> : <SideDrawerFixed {...props}/>
    return (
        <Aux>
            {/* <div style={{alignItems: 'center'}} > */}
            <nav className={attachedClasses} style={{alignItems: 'center'}}>
                {drawer}
            </nav>
            {/* </div> */}
        </Aux>
    );
};

export default withStyles(styles)(SideDrawer);