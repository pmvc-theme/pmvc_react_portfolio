import React from 'react'; 
import { Monitor, Browser } from 'organism-react-apple-device';
import { pageStore } from 'reshow'; 
import {
    assign,
    Header,
    Meta,
    Content,
    Divider,
    List,
    Item,
} from 'react-atomic-molecule';

import PortfolioModal from '../molecules/PortfolioModal';

const PortfolioContent = (props)=>{
    const pageState = pageStore.getState();
    const arrPortfolio = pageState.get('portfolio').toJS();
    const I18N = pageState.get('I18N').toJS(); 
    const one = arrPortfolio[props.name];
    if (!one) {
        return null;
    }
    return (
        <PortfolioModal
            center={false}
            {...props}
            show={true}
        >
            <div style={Styles.container}>
                <Header style={assign(
                    Styles.year,
                    {
                        borderBottom: '0.5rem solid '+
                            one.color1
                    }
                )}>{one.year}</Header>
                <Header style={Styles.header}>{one.header}</Header>
                <Meta atom="dl" style={Styles.meta}>
                    <dt style={Styles.dt}>{I18N.project}</dt>
                    <dd style={Styles.dd}>{one.project}</dd>
                    <dt style={Styles.dt}>{I18N.customer}</dt>
                    <dd style={Styles.dd}>{one.customer}</dd>
                    <dt style={Styles.dt}>{I18N.country}</dt>
                    <dd style={Styles.dd}>{one.country}</dd>
                </Meta>
                <Divider className="section" style={Styles.divider}/>
                <Content style={Styles.content}>{one.description}</Content>
                <Divider className="section" style={Styles.thinDivider}/>
                <List style={Styles.tech}>
                    <Item style={Styles.dt}>{I18N.technical}</Item>
                    {one.technical.map((item,key)=><Item style={Styles.dd} key={key+1}>{item}</Item>)}
                </List>
                <div style={assign(
                    {background: one.color1},
                    Styles.demo
                )}>
                    <Monitor>
                        <img className="pure-img" src={one.cover} /> 
                    </Monitor>
                </div>
                <div style={assign(
                    {background: one.color2},
                    Styles.demo
                )}>
                    {one.pages.map((item,key)=>
                        <Browser key={key}>
                            <img className="pure-img" src={item} /> 
                        </Browser>
                    )}
                </div>
            </div>
        </PortfolioModal>
    );
};

export default PortfolioContent;

const Styles = {
    container: {
        textAlign: 'center'
    },
    year: {
        fontSize: '1.875rem',
        display: 'inline-block',
        paddingBottom: '10px',
        marginBottom: '10px',
    },
    header: {
        fontSize: '7.5rem',
        fontFamily: 'Montserrat,sans-serif'
    },
    dt: {
        display: 'inline-block',
        fontWeight: 700,
        textTransform: 'uppercase'
    },
    dd: {
        display: 'inline-block',
        margin: '0 15px',
        textTransform: 'uppercase'
    },
    meta: {
        marginBottom: '30px'
    },
    divider: {
        borderBottom: '5px solid #2b2b2b',
        marginBottom: '2.5rem'
    },
    thinDivider: {
        marginBottom: '2.5rem'
    },
    content: {
        maxWidth: '32.5rem',
        margin: '0 auto',
        fontFamily: 'Raleway, sans-serif',
        letterSpacing: '0.069rem',
        lineHeight: '1.8',
    },
    tech: {
        marginBottom: '2.5rem'
    },
    demo: {
        padding: '1rem'
    }
};
