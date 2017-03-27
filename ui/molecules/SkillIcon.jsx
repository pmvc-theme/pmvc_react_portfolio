import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const SkillIcon = ({color, text, ...props}) =>
<SemanticUI {...props}>
    <circle cx="50" cy="50" r="50" style={{fill:color}}/>
    <text style={Styles.text} transform="translate(5, 60)">{text}</text>
</SemanticUI>

SkillIcon.defaultProps = {
    viewBox: '0 0 100 100',
    atom: 'svg',
    width: '100%'
};

export default SkillIcon;

const Styles = {
    text: {
        fontSize: 30,
        fill: '#f3f3f3',
        fontFamily: 'PoiretOne-Regular, Poiret One',
    }
};
