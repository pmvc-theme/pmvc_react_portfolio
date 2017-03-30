import React, {Component} from 'react'; 
import { 
    reactStyle,
    mixClass,
    SemanticUI 
} from 'react-atomic-molecule';
import { reshow, ReshowComponent } from 'reshow'; 
import { PageHeader } from 'pmvc_react_landing';
import { ScrollReceiver } from 'organism-react-scroll-nav';
import { HorizontalToVerticalMenu } from 'organism-react-navigation';

import Brand from '../organisms/Brand'; 
import HeaderNav from '../organisms/HeaderNav'; 

class HeaderScroll extends ReshowComponent
{
    static get initStates()
    {
        return ['brandUrl', 'freelancerFirstName', 'freelancerLastName', 'nav'];
    }

    render()
    {
        const {targetInfo, id, ...others} = this.props;
        const {brandUrl, freelancerFirstName, freelancerLastName, nav} = this.state;
        reactStyle({
           color: '#00ffea !important' 
        }, '#'+id+' .nav a:hover', 'header-link');
        reactStyle({
           fill: '#00ffea !important' 
        }, '#'+id+' .nav a:hover svg', 'header-link-svg');
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
                    url={brandUrl}
                    name={freelancerFirstName}
                    meta={freelancerLastName}
                    className="pure-u-lg-3-8"
                />
            }
            nav={
                <HeaderNav 
                    style={Styles.headerNav}
                    nav={nav}
                    className="pure-u-lg-5-8"
                    scrollRefId={id}
                />
            }
            component={PageHeader}
            id={id}
        />
        );
    }
}

const HeaderScrollContainer = reshow(HeaderScroll);

const Header = (props)=> 
    <ScrollReceiver
        id="header"
        targetId="design"
        scrollMargin={0}
        container={<HeaderScrollContainer />}
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

