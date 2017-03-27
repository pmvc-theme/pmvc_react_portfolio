import React, {Component} from 'react'; 

import Geometryangle from 'organism-react-geometryangle';
import { SplashBlock } from 'pmvc_react_landing';
import { ScrollReceiver } from 'organism-react-scroll-nav';
import { reshow, ReshowComponent } from 'reshow'; 

import Me from '../organisms/Me';
import Introduce from '../organisms/Introduce';

class Cover extends ReshowComponent 
{
    static get initStates()
    {
        return ['me', 'introduce'];
    }

    constructor(props)
    {
        super(props);
        this.state = {
            isRun: true
        };
    }

    componentWillReceiveProps(nextProps)
    {
        const {targetInfo} = nextProps;
        if (targetInfo.active || targetInfo.atTop) {
            this.geo.stop();
            this.setState({
                isRun: false   
            });
        } else {
            this.geo.start();
            this.setState({
                isRun: true   
            });
        }
    }
    
    render()
    {
        const {me, introduce} = this.state;
        const props = this.props;
        return (
        <SplashBlock style={Styles.container}>
            <Me
                style={Styles.hero}
                me={me}
            />
            <Geometryangle ref={geo=>this.geo=geo}/> 
            <Introduce isRun={this.state.isRun} {...introduce} />
        </SplashBlock>
        );
    }
};

const CoverContainer = reshow(Cover);

const ScrollCover = (props) =>
    <ScrollReceiver
        {...props}
        targetId="design"
        scrollMargin={0}
        container={<CoverContainer />}
    />

export default ScrollCover;


const Styles = {
    container: {
        minHeight: 350,
        background: '#8e7481'
    },
    hero: {
        maxWidth: '100%',
        maxHeight: '100%',
    }
};
