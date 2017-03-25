import React from 'react';

const Me = ({me, ...props}) => 
{
    if (React.isValidElement(me)) {
        return React.cloneElement(
            me,
            props
        );
    } else {
        return (
            <img src={me} {...props}/>
        );
    }
}

export default Me;
