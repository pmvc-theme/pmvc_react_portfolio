import React from 'react'; 
import { CardView } from 'react-atomic-organism';
import { 
    lazyInject
} from 'react-atomic-molecule';
import get from 'get-object-value';

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';

const CardList = (props) => {
    const {header, content} = props;
    return (
        <div className="pure-g">
            {get(props, ['image'], []).map((item, num)=>
                <div key={num} className="pure-u-1 pure-u-md-1-2">
                <CardView
                    imageSrc={item}
                    header={header[num]}
                    description={content[num]}
                    style={Styles.card}
                    className="aboutme"
                />
                </div>
            )}
        </div>
    );
};

const AboutMe = (props) => {
    const {header, content, card} = props;
    injects = lazyInject(
        injects,
        InjectStyles
    );
    return (
        <div>
            <Header>
                {header}
            </Header>
            <Content style={Styles.content}>
                {content}
            </Content>
            <CardList {...card} />
        </div>
    );
};

export default AboutMe;

const Styles = {
    card: {
        background: 'transparent',
        boxShadow: 'none',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Raleway, sans-serif',
        margin: '0 auto'
    },
    content: {
        marginBottom: '50px'
    },
};

let injects;
const InjectStyles = { 
    cardHeader: [
        {
            color: '#fff',
            fontSize: '1.75rem',
            paddingBottom: 30,
            borderBottom: '1px solid #3d3d3d',
            marginBottom: 40
        },
        '.aboutme.ui.card>.content>.header'
    ],
    cardDescription: [
        {
            color: '#fff',
            lineHeight: '1.8'
        },
        '.aboutme.ui.card>.content>.description'
    ]
};
