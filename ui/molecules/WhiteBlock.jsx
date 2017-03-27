import React from 'react';
import Section from '../molecules/Section';

const WhiteBlock = (props) => 
    <Section {...props} 
        style={{
            ...Styles.container,
            ...props.style
        }}
    />

export default WhiteBlock;

const Styles = {
    container: {
        padding: '80px 0',
        marginBottom: 0
    }
};
