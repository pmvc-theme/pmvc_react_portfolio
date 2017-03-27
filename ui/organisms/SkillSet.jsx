import React, {Component} from 'react'; 
import { CardView } from 'react-atomic-organism';
import { 
    lazyInject,
    Image,
    List,
    Card,
    Header,
    Description
} from 'react-atomic-molecule';
import get from 'get-object-value';
import SkillIcon from '../molecules/SkillIcon';

const CardList = (props) =>
{
    const {icon, image, header, content} = props;
    return (
        <List type="card" className="skillset" styles={injects.cards}> 
            {get(props, ['header'], []).map((item, num)=> {
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
                            <SkillIcon
                                color={get(icon, ['color', num])}
                                text={get(icon, ['text', num])}
                            />
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
