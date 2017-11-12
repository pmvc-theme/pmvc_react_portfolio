import React, {Component} from 'react';
import Typing from "organism-react-typing";
import get from 'get-object-value';
import { 
   SemanticUI 
} from 'react-atomic-molecule';

class Introduce extends Component
{
    componentWillReceiveProps(nextProps)
    {
        if (nextProps.isRun) {
            this.type.start();
        } else {
            this.type.stop();
        }
    }

    render()
    {
        const {bd, ...props} = this.props;
        return (
            <SemanticUI style={Styles.container} className="introduce">
                <div className="hd" style={Styles.hd}>
                    {props.hd}
                </div>
                <div className="bd" style={Styles.bd}>
                    {get(bd, ['fixed'])}
                    <Typing
                        color="#fff"
                        ref={el=>this.type=el}
                    >
                        {get(bd, ['animation'], []).map((item, key)=>(
                            <div key={key}>{item}</div>
                        ))}
                    </Typing>
                </div>
                <div className="ft" style={Styles.ft}>
                    {props.ft}
                </div>
            </SemanticUI>
        );
    }
}

export default Introduce;

const Styles = {
    container: {
        position: 'absolute',
        bottom: '10%',
        marginLeft: '25px',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    hd: {
        fontSize: '18px',
        border: '1px solid #fff',
        borderLeft: 'none',
        borderRight: 'none',
        display: 'inline',
        whiteSpace: "nowrap"
    }, 
    bd: {
        font: '50px/1.5 Montserrat,sans-serif',
        fontWeight: '700'
    },
    ft: {
        width: 300,
    }

    
};
