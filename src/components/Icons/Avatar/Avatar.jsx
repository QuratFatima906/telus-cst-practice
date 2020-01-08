import React from 'react';
import AvatarIcon from '@material-ui/core/Avatar';
import Image from '../../../Images/placeholder.jpg'

const Avatar = props => {
    let source = '';
    (props.src) ? source = props.src : source = Image;
    return (
        <AvatarIcon alt="User Image" src={source} />
    );
};

export default Avatar;