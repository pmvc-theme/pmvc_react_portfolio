import React, {Component} from 'react'; 
import { SemanticUI } from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import { ScrollSpy } from 'organism-react-scroll-nav';
import ScrollAnimate from 'organism-react-scroll-animate';

import HeaderContent from '../molecules/HeaderContent';
import Cover from '../organisms/Cover';
import Portfolio from '../organisms/Portfolio';
import AboutMe from '../organisms/AboutMe';
import SkillSet from '../organisms/SkillSet';
import Experience from '../organisms/Experience';
import Contact from '../organisms/Contact';
import Freelancer from '../templates/Freelancer'; 
import Footer from '../organisms/Footer'; 

class Body extends Component
{

    render()
    {
        const I18N = pageStore.getMap('I18N');
        const state = this.state;
        const section = pageStore.getMap('section');
        return (
            <SemanticUI>
                <ScrollSpy id="design">
                    <HeaderContent {...section.design} />
                    <Portfolio {...section.portfolio} />
                </ScrollSpy>
                <ScrollSpy id="about-me">
                    <AboutMe {...section.aboutme} />
                    <SkillSet {...section.skillset} />
                </ScrollSpy>
                <ScrollAnimate
                    scrollMargin={-100}
                    id="experience"
                    testScrollTo={true}
                    style={{background:'#3C5B65'}}
                >
                    {()=><Experience {...section.experience}/>}
                </ScrollAnimate>
                <ScrollSpy id="contact">
                    <Contact {...section.contact} />
                </ScrollSpy>
            </SemanticUI>
        );
    }
}

const Home = () =>
<Freelancer
    cover={<Cover />}
    body={<Body />}
    contentWrapper={{
        style: Styles.contentWrapper
    }}
/>

export default Home;

const Styles = {
    contentWrapper: {
        top: '100%'
    },
};
