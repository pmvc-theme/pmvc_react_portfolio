import React, {PureComponent} from 'react';
import get from 'get-object-value';
import {CardView} from 'react-atomic-organism';
import {lazyInject, List, Unsafe} from 'react-atomic-molecule';
import {Return} from 'reshow';
import marked from 'marked';

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import Section from '../molecules/WhiteBlock';
import {handleWithUrl} from '../../src/goTo';

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
});
let isLoadUrl;

const ItemList = ({header, content, meta, id, anchor}) => {
  return (
    <List type="items" className="more" style={Styles.list}>
      {get(header, [], []).map((item, key) => (
        <CardView
          style={'#' + id[key] === anchor ? Styles.selected : null}
          header={header[key]}
          headerProps={{ui: false}}
          meta={meta[key]}
          description={<Unsafe>{marked(content[key])}</Unsafe>}
          lineAtom="p"
          item={true}
          id={id[key]}
          key={key}
        />
      ))}
    </List>
  );
};

class DetailBody extends PureComponent {
  constructor(props) {
    super(props);
    injects = lazyInject(injects, InjectStyles);
  }
  componentDidMount() {
    if (!isLoadUrl) {
      isLoadUrl = handleWithUrl();
    }
  }
  componentDidUpdate() {
    if (!isLoadUrl) {
      isLoadUrl = handleWithUrl();
    }
  }

  render() {
    const {anchor, header, content, items} = this.props;
    return (
      <div>
        <Header style={Styles.header}>{header}</Header>
        <Content style={Styles.content}>{content}</Content>
        <ItemList {...{...items, anchor}} />
      </div>
    );
  }
}

const Detail = props => (
  <Section name="detail">
    <Return initStates={['anchor']}>
      <DetailBody {...props} />
    </Return>
  </Section>
);

export default Detail;

const Styles = {
  list: {
    padding: '0 10px',
  },
  selected: {
    padding: 10,
    background: 'rgba(0,0,0,.05)',
  },
};

let injects;
const InjectStyles = {
  desc: [
    {
      color: 'rgba(0,0,0,.5)',
      fontSize: '.9rem'
    },
    '.ui.items.more>.item>.content>.description'
  ],
  meta: [
    {
      color: '#000 !important'
    },
    '.ui.items>.item .meta'
  ],
};
