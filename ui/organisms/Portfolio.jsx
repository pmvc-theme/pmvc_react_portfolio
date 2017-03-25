import React, {Component} from 'react'; 
import Animate from "organism-react-scroll-animate";

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import WhiteBlock from '../molecules/WhiteBlock';
import PortfolioList from '../organisms/PortfolioList';

const Portfolio = (props) =>
{
    const {header, content, card} = props;
    return (
        <WhiteBlock style={Styles.container}>
            <div style={Styles.extra}>
                <div style={Styles.extraInside} />
            </div>
            <Header>
                {header}
            </Header>
            <Content style={Styles.content}>
                {content}
            </Content>
            <Animate enter="fadeInDown">
                <PortfolioList {...card}/>
            </Animate>
        </WhiteBlock>
    );
}
export default Portfolio;

const Styles = {
    container: {
        maxWidth: '930px',
        position: 'relative'
    },
    content: {
        marginBottom: '50px'
    },
    extra: {
        position: 'absolute',
        top: '-40px',
        left: 0,
        right: 0
    },
    extraInside: {
        width: '500px',
        height: '40px',
        background: '#fff',
        margin: '0 auto',
        borderRadius: '5px',
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
    }
};

