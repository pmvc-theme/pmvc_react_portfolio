import React, {Component} from 'react'; 
import { Header, Content } from 'react-atomic-molecule';
import Animate from "organism-react-scroll-animate";
import HighLighter from 'organism-react-tag-highlight';

const HeaderContent = (props) => ( 
    <Animate enter="fadeInDown" style={Styles.container}>
        <Header ui={false} style={Styles.header}>
            <HighLighter bStyle={Styles.b}>
                {props.header}
            </HighLighter>
        </Header>
        <Content style={Styles.content}>
            {props.content}
        </Content>
    </Animate>
);

export default HeaderContent;

const Styles = {
    container: {
        fontFamily: "Raleway,sans-serif",
        lineHeight: 1.5,
        fontWeight: 200,
    },
    header: {
        fontSize: "2.813rem",
        textAlign: 'center',
    },
    b: {
        color: "#00ffea",
        fontWeight: 200,
    },
    content: {
        fontSize:'1.25rem',
        textAlign: 'center',
    }
};
