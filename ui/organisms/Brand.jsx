import React from 'react'; 
import { 
    reactStyle,
    SemanticUI
} from 'react-atomic-molecule'; 

import smoothScrollTo from 'smooth-scroll-to';

const Brand = (props) => (
    <SemanticUI 
        style={Styles.brand}
        className={props.className}
    >
    <SemanticUI
        atom="a"
        href={props.url}
        styles={reactStyle({
            position: 'absolute',
            top: '50%',
            transform: ['translateY(-50%)'],
            display: 'inline-block',
            color: '#fff',
            textDecoration: 'none',
        },null, false)} 
        onClick={()=>{smoothScrollTo(0)}}
    >
        <div style={Styles.name}>{props.name}</div>
        {props.meta}
    </SemanticUI>
    </SemanticUI>
)

export default Brand;

const Styles = {
    name: {
        display: 'inline-block',
        fontWeight:600,
        marginRight: 9,
    },
    brand: {
        fontWeight: 200,
        letterSpacing: '0.081rem',
        fontSize: '1.375rem',
        fontFamily: 'Raleway, sans-serif',
        textTransform: 'uppercase',
        position: 'relative',
        height: '60px',
        paddingLeft: '1.75rem',
        boxSizing: 'border-box'
    }
};
