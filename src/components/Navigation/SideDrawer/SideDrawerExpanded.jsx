import React from 'react';

import NavItems from '../NavItems/NavItems';

const SideDrawerExpanded = props => {
    return (
        <NavItems expanded {...props} />
    );
};

export default SideDrawerExpanded;