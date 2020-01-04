import React, {PureComponent} from 'react'; 

import Geometryangle from 'organism-react-geometryangle';
import { SplashBlock } from 'pmvc_react_landing';
import { ScrollReceiver } from 'organism-react-scroll-nav';
import { Return } from 'reshow'; 

import Me from '../organisms/Me';
import Introduce from '../organisms/Introduce';

class Cover extends PureComponent 
{
    state = {isRun: true};

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const {targetInfo} = this.props;
        if (targetInfo.active || targetInfo.atTop) {
            if (prevState.isRun) {
              this.geo.stop();
              this.setState({
                  isRun: false   
              });
            }
        } else {
            this.geo.start();
            this.setState({
                isRun: true   
            });
        }
    }
    
    render()
    {
        const {me, introduce} = this.props;
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


const ScrollCover = (props) =>
    <ScrollReceiver
        {...props}
        targetId="design"
        scrollMargin={0}
        container={<Return initStates={['me', 'introduce']}><Cover /></Return>}
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
