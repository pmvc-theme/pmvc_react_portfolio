import React, {PureComponent} from 'react'; 
import get from 'get-object-value';
import { CardView } from 'react-atomic-organism';
import { List, Unsafe } from 'react-atomic-molecule';

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import Section from '../molecules/WhiteBlock';
import {handleWithUrl} from '../../src/goTo';

let isLoadUrl;

const ItemList = (props) =>
{
    const {header, content, contents, id} = props;
    return (
        <List type="item" style={Styles.list}>
            {get(header, [], []).map((item, key)=>
                <CardView
                    header={header[key]}
                    description={<Unsafe>{content[key]}</Unsafe>}
                    lineAtom="p"
                    item={true}
                    id={id[key]}
                    key={key}
                />
            )}
        </List>
    );
}

class DetailBody extends PureComponent
{
    componentDidMount()
    {
        if (!isLoadUrl) {
            isLoadUrl = handleWithUrl();
        }
    }
    componentDidUpdate()
    {
        if (!isLoadUrl) {
            isLoadUrl = handleWithUrl();
        }
    }

    render()
    {
        const {header, content, items} = this.props;
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
