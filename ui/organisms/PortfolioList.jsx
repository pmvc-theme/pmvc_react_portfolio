import React from 'react'; 
import ZoomIn from 'ricon/ZoomIn';
import get from 'get-object-value';
import { 
    lazyInject,
    List,
} from 'react-atomic-molecule';

import { HoverDimmerCardView } from 'react-atomic-organism';

import { 
    dispatch,
    pageStore,
    reshow
} from 'reshow';

import {
    PopupMonitor
} from 'organism-react-popup';


import PortfolioContent from '../organisms/PortfolioContent';


class PortfolioList extends PopupMonitor 
{
   static getStores()
   {
       return [pageStore];
   }

   static get popupKey()
   {
        const state = pageStore.getState();
        const portfolioId = state.get('portfolioId');
        return portfolioId;
   }

   static getPopupElement(key)
   {
        return (
        <PortfolioContent
            appear="fadeIn-500"
            enter="fadeIn-500"
            leave="fadeOut-500"
            name={key}
            closeCallBack={()=>{
                dispatch({
                    type: 'config/set',
                    params: {
                        portfolioId: '' 
                    },
                    url: '/index.php/index/'
                });
            }}
        />
        );
   }

    constructor(props) 
    {
        super(props);
        injects = lazyInject(
            injects,
            InjectStyles
        );
    }

    render()
    {
        const {header, keys, ...props} = this.props;
        return (
            <List type="card" styles={injects.cards} className="portfolio"> 
            {get(props, ['image'], []).map((item, num)=>
                <HoverDimmerCardView
                    key={num}
                    imageSrc={item}
                    header={header[num]}
                    style={Styles.card}
                    onClick={(e)=>{
                        dispatch({
                            type: 'config/set',
                            params: {
                                portfolioId: keys[num]
                            },
                            url: '/index.php/index/'+keys[num]
                        });
                    }}
                >
                    <ZoomIn style={Styles.zoom} />
                </HoverDimmerCardView>
            )}
            </List>
        );
    }
}

const PortfolioListContainer = reshow(
    PortfolioList,
    { withProps:true }
);

export default PortfolioListContainer;

const Styles = {
    card: {
        background: '#000'
    },
    zoom: {
        fill: '#fff',
        width: '50px',
        height: '50px'
    },
};

let injects;
const InjectStyles = { 
    cardHeader: [
        {color: '#fff'},
        '.portfolio.ui.cards>.card>.content>.header'
    ],
    cards: [{
        justifyContent: ['center']
    }]
};
