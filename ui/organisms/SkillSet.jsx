import React, {Component} from 'react'; 
import { CardView } from 'react-atomic-organism';
import { 
    lazyInject,
    List,
    Card
} from 'react-atomic-molecule';
import get from 'get-object-value';

const CardList = (props) =>
{
    const {header, content} = props;
    return (
        <List type="card" className="skillset" styles={injects.cards}> 
            {get(props, ['image'], []).map((item, num)=>
                <CardView
                    key={num}    
                    imageSrc={item}
                    header={header[num]}
                    description={content[num]}
                    style={Styles.card}
                />
            )}
            {get(props, ['icon', 'color'], []).map((item, num)=>
                <Card
                    key={num}
                    style={Styles.card}
                >
                    {item}
                </Card>
            )}
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
        color: '#fff',
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
