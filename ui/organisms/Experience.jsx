import React, {Component} from 'react'; 
import { EventTimeline } from 'organism-react-event-timeline'; 
import {scrollStore} from 'organism-react-scroll-nav';
import get from 'get-object-value';

// event link to more
import smoothScrollTo from 'smooth-scroll-to';
import getOffset from 'getoffset';

import WhiteBlock from '../molecules/WhiteBlock';
import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';


class ExperienceBody extends Component
{
    eventClick = (e,props) =>
    {
        const body = document.body;
        const dRef = body.querySelector(props.link);
        const dHeader = body.querySelector("#header");
        const headerPos = getOffset(dHeader);
        
        let i = 3;
        const tune = (delay) => {
            if (!i) {
                return;
            }
            i--;
            let pos = getOffset(dRef);
            let to = pos.top - (headerPos.bottom-headerPos.top);
            smoothScrollTo(to, delay, null, ()=>{
                setTimeout(()=>{
                    tune(1);
                },500);
            });
        };
        tune();
    }

    componentDidMount()
    {
        scrollStore.scrollMonitor();
    }

    render()
    {
        const {header, content, events} = this.props;
        let arrEvent = [];
        get(events,['header'],[]).forEach((item, k)=>{
            arrEvent.push({
                header: item,
                description: events.content[k].split('[br]'),
                from: events.from[k].split(','),
                to: events.to[k].split(','),
                link: events.link[k]
            });
        });
        return (
            <div>
                <Header style={Styles.header}>
                    {header}
                </Header>
                <Content style={Styles.content}>
                    {content}
                </Content>
                <EventTimeline
                    events={arrEvent}
                    animate={{
                        enter: 'fadeInLeft'
                    }}
                    evenAnimate={{
                        enter: 'fadeInRight'
                    }}
                    handleEventClick={this.eventClick}
                />
            </div>
        );
    }
}

const Experience = ()=>
<WhiteBlock name="experience" style={Styles.container}>
    <ExperienceBody />
</WhiteBlock>

export default Experience;

const Styles = {
    container: {
        background: 'url(http://freelancer.ntd230.com/photos/pattern.svg) 50% 50% / cover no-repeat #3C5B65',
        color: '#fff',
        maxWidth: '100%',
    },
};

