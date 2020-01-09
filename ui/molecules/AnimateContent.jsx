import React, {Component} from 'react'; 
import Animate from "organism-react-scroll-animate";
import { Description } from 'react-atomic-molecule';

const AnimateContent = (props) => ( 
    <Animate once={true} enter="fadeInRight-600">
        <Description
            {...props}
            style={{
                ...Styles.text,
                ...props.style
            }}
        />
    </Animate>
);

export default AnimateContent;

const Styles = {
    text: {
        fontFamily: "Raleway,sans-serif",
        fontSize: "1.125rem",
        lineHeight: 1.7,
    }
};
