import React, {Component} from 'react';
import {Return} from 'reshow';
import {Description} from 'react-atomic-molecule';
import get from 'get-object-value';

const Body = props => {
  const I18N = get(props, ['I18N'], {});
  return <div style={Styles.container}><Description>{I18N.footerText?.split('[br]')}</Description></div>;
};

const Footer = () => (
  <Return>
    <Body />
  </Return>
);

export default Footer;

const Styles = {
  container: {
    paddingTop: 70,
    minHeight: 150,
    boxSizing: 'border-box',
    background: '#000',
    fontSize: '.75rem',
    color: '#afafaf',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.069rem',
  },
};
