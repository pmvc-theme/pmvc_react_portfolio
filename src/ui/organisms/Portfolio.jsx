import React, { Component } from "react";
import Animate from "organism-react-scroll-animate";
import { SemanticUI } from "react-atomic-molecule";

import Header from "../molecules/AnimateHeader";
import Content from "../molecules/AnimateContent";
import PortfolioList from "../organisms/PortfolioList";

const Portfolio = (props) => {
  const { header, content, card } = props;
  return (
    <SemanticUI style={Styles.container}>
      <div style={Styles.extra}>
        <div style={Styles.extraInside} />
      </div>
      <Header>{header}</Header>
      <Content style={Styles.content}>{content}</Content>
      <Animate enter="fadeInDown">
        <PortfolioList {...card} />
      </Animate>
    </SemanticUI>
  );
};
export default Portfolio;

const Styles = {
  container: {
    maxWidth: 930,
    position: "relative",
    margin: "0 auto",
  },
  content: {
    marginBottom: "50px",
  },
  extra: {
    position: "absolute",
    top: "-80px",
    left: 0,
    right: 0,
  },
  extraInside: {
    width: "500px",
    height: "40px",
    background: "#fff",
    margin: "0 auto",
    borderRadius: "5px",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
};
