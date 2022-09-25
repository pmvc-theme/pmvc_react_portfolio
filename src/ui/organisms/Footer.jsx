import React, { Component } from "react";
import { Return } from "reshow";
import { Description, Icon } from "react-atomic-molecule";
import get from "get-object-value";
import Git from "ricon/Git";

const Body = ({ I18N, GIT }) => {
  return (
    <div style={Styles.container}>
      <Description>{I18N?.footerText?.split("[br]")}</Description>
      {GIT && (
        <Icon style={Styles.icon} atom="a" href={GIT} target="_blank">
          <Git />
        </Icon>
      )}
    </div>
  );
};

const Footer = () => (
  <Return initStates={["I18N", "GIT"]}>
    <Body />
  </Return>
);

export default Footer;

const Styles = {
  container: {
    paddingTop: 70,
    minHeight: 150,
    boxSizing: "border-box",
    background: "#000",
    fontSize: ".75rem",
    color: "#afafaf",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.069rem",
  },
  icon: {
    width: 24,
    height: 24,
    fill: "#fff",
  },
};
