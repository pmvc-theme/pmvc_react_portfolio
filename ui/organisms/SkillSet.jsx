import React from 'react'; 
import { CardView } from 'react-atomic-organism';
import { 
    build,
    lazyInject,
    Image,
    List,
    Card,
    Header,
    Description
} from 'react-atomic-molecule';
import get from 'get-object-value';

// icons
import SkillPHPIcon from '../organisms/SkillPHPIcon';
import SkillJSIcon from '../organisms/SkillJSIcon';
import SkillHtml5Icon from '../organisms/SkillHtml5Icon';
import SkillCss3Icon from '../organisms/SkillCss3Icon';
import SkillReactIcon from '../organisms/SkillReactIcon';
import SkillReactHookIcon from '../organisms/SkillReactHookIcon';
import SkillReactNativeIcon from '../organisms/SkillReactNativeIcon';
import SkillDockerIcon from '../organisms/SkillDockerIcon';
import SkillKubernetesIcon from '../organisms/SkillKubernetesIcon';
import SkillDroneIcon from '../organisms/SkillDroneIcon';
import SkillGaIcon from '../organisms/SkillGaIcon';
import SkillAbTestIcon from '../organisms/SkillAbTestIcon';
import SkillWordpressIcon from '../organisms/SkillWordpressIcon';
import SkillD3JsIcon from '../organisms/SkillD3JsIcon';

const Icons = {
    php: SkillPHPIcon,
    js: SkillJSIcon,
    html5: SkillHtml5Icon,
    css3: SkillCss3Icon,
    ga: SkillGaIcon, 
    docker: SkillDockerIcon,
    k8s: SkillKubernetesIcon, 
    drone: SkillDroneIcon,
    react: SkillReactIcon,
    reactHook: SkillReactHookIcon,
    reactNative: SkillReactNativeIcon,
    abTest: SkillAbTestIcon,
    wordpress: SkillWordpressIcon,
    d3Js: SkillD3JsIcon
};

const CardList = (props) =>
{
    const {icon, image, header, content} = props;
    return (
        <List type="cards" className="skillset" styles={injects.cards}> 
            {get(props, ['header'], []).map((item, num)=> {
                const iconName = icon[num];
                let img;
                if (get(image,[num])) {
                    return (
                        <CardView
                            key={num}    
                            imageSrc={get(image,[num])}
                            header={header[num]}
                            description={content[num]}
                            style={Styles.card}
                        />
                    );
                } else {
                    return (
                        <Card
                            key={num}
                            style={Styles.card}
                        >
                            {build(Icons[iconName])({name: iconName})}
                            <Header>{header[num]}</Header>
                            <Description>{content[num]}</Description>
                        </Card>
                    );
                }
            })}
        </List>
    );
}

const SkillSet = (props) =>
{
    const {cards} = props;
    injects = lazyInject(
        injects,
        InjectStyles
    );
    return (
        <CardList {...cards}/>
    );
}

export default SkillSet;

const Styles = {
    card: {
        background: 'transparent',
        boxShadow: 'none',
        color: '#000',
        textAlign: 'center',
        width: 150,
    },
};

let injects;
const InjectStyles = { 
    cardImageWrapper: [
        {
            paddingBottom: '50% !important'
        },
        '.skillset.ui.cards>.card>.image-wrapper'
    ],
    cardContent: [
        {
            border: 'none'
        },
        '.skillset.ui.cards>.card>.content, .ui.card>.content'
    ],
    cards: [
        {
            justifyContent: ['center']
        }
    ]
};
