import React, {Component} from 'react';

import {Return} from 'reshow';
import get from 'get-object-value';

const Body = props => {
  const I18N = get(props, ['I18N'], {});
  return <div style={Styles.container}>{I18N.footerText}</div>;
};

const Footer = () => (
  <Return>
    <Body />
  </Return>
);

export default Footer;

const Styles = {
  container: {
    minHeight: 150,
    background: '#000',
    lineHeight: '150px',
    fontSize: '.75rem',
    color: '#afafaf',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.069rem',
  },
};
