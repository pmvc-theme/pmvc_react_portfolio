import React, {Component} from 'react'; 
import {
    PopupModal
} from 'organism-react-popup';

import {lazyInject} from 'react-atomic-molecule';
import XIco from 'ricon/X';


class PortfolioModal extends Component
{
    constructor(props) 
    {
        super(props);
        injects = lazyInject(
            InjectStyles,
            injects
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        this.setState({
            xIcoHoverStyle: null 
        });
    }

    xIcoEnter()
    {
        this.setState({
            xIcoHoverStyle: Styles.xIcoHover
        });
    }

    xIcoLeave()
    {
        this.setState({
            xIcoHoverStyle: null 
        });
    }

    render()
    {
        let xIcoHover = null;
        if (this.state) {
            xIcoHover = this.state.xIcoHoverStyle;
        }
        let xico = <XIco
            onMouseEnter={
                this.xIcoEnter.bind(this)
            } 
            onMouseLeave={
                this.xIcoLeave.bind(this)
            } 
            style={{
                ...Styles.x,
                ...xIcoHover
            }}
            size="75px"
            weight=".1rem"
        />;

        const {children, ...props} = this.props;
        return (
            <PopupModal
                {...props}
                style={Styles.container}
                fullScreenStyle={Styles.fullScreen}
                className="basic"
                closeEl={xico}
                scrolling={true}
            >
                {children}
            </PopupModal>
        );
    }
}

export default PortfolioModal;

const Styles = {
    container: {
        background: '#fff'
    },
    fullScreen: {
        color: '#000',
        top: 0,
        width: '100%',
        marginBottom: 0
    },
    x: {
        width: '70px',
        height: '75px',
        borderRadius: '8px',
        backgroundColor: 'rgba(190,190,190,.39)',
        top: '20px',
        right: '20px'
    },
    xIcoHover: {
        opacity: '.3'
    }
};

let injects;
const InjectStyles = {
    fullScreen: [
        {
            margin: '3.5rem 0 0 !important'
        },
        '.modals.dimmer .ui.scrolling.modal'
    ]
};
