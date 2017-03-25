import React, {Component} from 'react'; 
import { 
    assign, 
    reactStyle,
    mixClass,
    SemanticUI 
} from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import { PageHeader } from 'pmvc_react_landing';
import { ScrollReceiver } from 'organism-react-scroll-nav';
import { HorizontalToVerticalMenu } from 'organism-react-navigation';

import Brand from '../organisms/Brand'; 
import HeaderNav from '../organisms/HeaderNav'; 

const HeaderScroll = (props) => 
{
    const pageState = pageStore.getState();
    const {targetInfo, id, ...others} = props;
    reactStyle({
       color: '#00ffea !important' 
    }, '#'+id+' a:hover', 'header-link');
    reactStyle({
       fill: '#00ffea !important' 
    }, '#'+id+' a:hover svg', 'header-link-svg');
    let classes;
    if (targetInfo.active || targetInfo.atTop) {
        classes='scrolling';
    }
    return (
    <HorizontalToVerticalMenu 
        {...others}
        style={Styles.container}
        className={classes}
        brand={
            <Brand 
                url={pageState.get('brandUrl')}
                name={pageState.get('freelancerFirstName')}
                meta={pageState.get('freelancerLastName')}
                className="pure-u-lg-3-8"
            />
        }
        nav={
            <HeaderNav 
                style={Styles.headerNav}
                nav={pageStore.getMap('nav')}
                className="pure-u-lg-5-8"
                scrollRefId={id}
            />
        }
        component={PageHeader}
        id={id}
    />
    );

}

const Header = (props)=> 
    <ScrollReceiver
        id="header"
        targetId="design"
        scrollMargin={0}
        container={<HeaderScroll />}
    />

export default Header;

const Styles = {
    container: {
        background: '#000',
        maxHeight: '60px',
        boxSizing: 'border-box',
        overflow: 'hidden'
    },
    headerNav: {
        padding:0,
        margin:0,
        whiteSpace: 'nowrap'
    },
};

