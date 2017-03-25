import React, {Component} from 'react'; 
import Animate from "organism-react-scroll-animate";
import { assign, Header } from 'react-atomic-molecule';

const AnimateHeader = (props) => ( 
    <Animate once={true} enter="fadeInLeft-600">
        {()=>
            <Header 
                {...props}
                style={assign(
                    {},
                    Styles.text,
                    props.style
                )}
                ui={false}
            />
        }
    </Animate>
);

export default AnimateHeader;

const Styles = {
    text: {
        fontFamily: "'Oleo Script Swash Caps',cursive",
        textAlign: "center",
        fontSize: "2.625rem",
        textTransform: "capitalize",
    }
};
