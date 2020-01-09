import React from 'react';
import {CardView} from 'react-atomic-organism';
import {lazyInject, Description, List, Item} from 'react-atomic-molecule';
import get from 'get-object-value';

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';

const CardList = props => {
  const {header, content} = props;
  return (
    <div className="pure-g">
      {get(props, ['image'], []).map((item, num) => (
        <div key={num} className="pure-u-1 pure-u-md-1-2">
          <CardView
            imageSrc={item}
            header={header[num]}
            description={content[num]}
            style={Styles.card}
            className="aboutme"
          />
        </div>
      ))}
    </div>
  );
};

const ListComp = ({list}) => {
  return (
    <List type="items" style={Styles.list}>
    {
    list.map( (item, key) => <Item key={key}>{item}</Item>)
    }
    </List>
  );
}

const AboutMe = props => {
  const {header, content, list, card} = props;
  injects = lazyInject(injects, InjectStyles);
  return (
    <div className="about-me" style={Styles.container}>
      <Header>{header}</Header>
      <Content style={Styles.content}>
        <Description>{content.split('[br]')}</Description>
        {list ? <ListComp list={list} /> : null}
      </Content>
      {card ? <CardList {...card} /> : null}
    </div>
  );
};

export default AboutMe;

const Styles = {
  container: {
    maxWidth: 800,
    margin: '0 auto',
  },
  card: {
    background: 'transparent',
    boxShadow: 'none',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
    margin: '0 auto',
  },
  content: {
    marginBottom: '50px',
  },
  list: {
    paddingTop: 88 
  }
};

let injects;
const InjectStyles = {
  cardHeader: [
    {
      color: '#fff',
      fontSize: '1.75rem',
      paddingBottom: 30,
      borderBottom: '1px solid #3d3d3d',
      marginBottom: 40,
    },
    '.aboutme.ui.card>.content>.header',
  ],
  cardDescription: [
    {
      color: '#fff',
      lineHeight: '1.8',
    },
    '.aboutme.ui.card>.content>.description',
  ],
};
