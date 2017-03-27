import React from 'react';

const Me = ({me, ...props}) => 
{
    if (React.isValidElement(me)) {
        return React.cloneElement(
            me,
            props
        );
    } else {
        if (me) {
            return (
                <img src={me} {...props}/>
            );
        } else {
            return null;
        }
    }
}

export default Me;
