import React from 'react'; 
import get from 'get-object-value';
import { CardView } from 'react-atomic-organism';
import { List } from 'react-atomic-molecule';

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import Section from '../molecules/WhiteBlock';

const ItemList = (props) =>
{
    const {header, content, contents} = props;
    return (
        <List type="item">
            {get(header, [], []).map((item, num)=>
                <CardView
                    header={header[num]}
                    description={get(
                        contents,
                        [content[num]],
                        content[num]
                    )}
                    item={true}
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
};
