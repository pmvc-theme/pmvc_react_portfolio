import React from 'react';
import { ContentBlock } from 'pmvc_react_landing';
import { assign } from 'react-atomic-molecule';

const WhiteBlock = (props) => 
    <ContentBlock {...props} style={assign(
        {},
        Styles.container,
        props.style
    )}/>

export default WhiteBlock;

const Styles = {
    container: {
        padding: '80px 0',
        marginBottom: 0
    }
};
