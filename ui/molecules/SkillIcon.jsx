import React from 'react';
import {
    SemanticUI
} from 'react-atomic-molecule';

const SkillIcon = (props) =>
<SemanticUI {...props}>
    <circle class="cls-1" cx="184" cy="168" r="168"/>
    <text>{props.children}</text>
</SemanticUI>

SkillIcon.defaultProps = {
    viewBox: '0 0 368 336',
    atom: 'svg',
    width: '100%'
};

export default SkillIcon;
