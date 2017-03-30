import React from 'react';
import {Image} from 'organism-react-animate';

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
                <Image {...props}
                    src={me}
                    className='centered circular'
                />
            );
        } else {
            return null;
        }
    }
}

export default Me;
