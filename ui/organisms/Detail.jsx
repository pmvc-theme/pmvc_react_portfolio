import React from 'react'; 
import get from 'get-object-value';
import { CardView } from 'react-atomic-organism';
import { List, Unsafe } from 'react-atomic-molecule';

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import Section from '../molecules/WhiteBlock';

const ItemList = (props) =>
{
    const {header, content, contents, id} = props;
    return (
        <List type="item" style={Styles.list}>
            {get(header, [], []).map((item, num)=>
                <CardView
                    header={header[num]}
                    description={<Unsafe>{content[num]}</Unsafe>}
                    lineAtom="p"
                    item={true}
                    id={id[num]}
                />
            )}
        </List>
    );
}

const DetailBody = (props) =>
{
    const {header, content, items} = props;
    return (
    <div>
        <Header style={Styles.header}>
            {header}
        </Header>
        <Content style={Styles.content}>
            {content}
        </Content>
        <ItemList {...items} />
    </div>
    );
}

const Detail = (props) =>
    <Section name="detail">
    <DetailBody {...props} />
    </Section>

export default Detail;

const Styles = {
    list: {
        padding: '0 10px'
    }
};
