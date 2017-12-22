import React from 'react'; 
import get from 'get-object-value';
import { CardView } from 'react-atomic-organism';
import { List, Unsafe } from 'react-atomic-molecule';
import { reshow, ReshowComponent } from 'reshow'; 

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import Section from '../molecules/WhiteBlock';
import {handleWithUrl} from '../../src/goTo';

let isLoadUrl;

const ItemList = ({header, content, contents, id, anchor}) =>
{
    return (
        <List type="item" style={Styles.list}>
            {get(header, [], []).map((item, key)=>
                <CardView
                    style={('#'+id[key]===anchor) ? Styles.selected: null}
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

class DetailBody extends ReshowComponent
{
    static get initStates()
    {
        return ['anchor'];
    }

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
        const {anchor} = get(this, ['state'], {});
        return (
        <div>
            <Header style={Styles.header}>
                {header}
            </Header>
            <Content style={Styles.content}>
                {content}
            </Content>
            <ItemList {...{...items, anchor}} />
        </div>
        );
    }
}

const DetailBodyConnected = reshow(DetailBody);

const Detail = (props) =>
    <Section name="detail">
    <DetailBodyConnected {...props} />
    </Section>

export default Detail;

const Styles = {
    list: {
        padding: '0 10px'
    },
    selected: {
        background: 'rgba(0,0,0,.05)'
    }
};
