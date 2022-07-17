import React, { Component } from "react";
import { List, Item, Icon } from "react-atomic-molecule";
import { SmoothScrollLink } from "organism-react-scroll-nav";
import get from "get-object-value";
import callfunc from "call-func";
import { ReLink } from "reshow";

import IcoDescription from "ricon/Description";

const NavItem = (props) => {
  const { link, href, text, icon, targetInfo, handleOn, onClick, ...others } =
    props;
  let thisIcon = null;
  if (icon) {
    thisIcon = <Icon style={Styles.icon}>{Icons[icon]}</Icon>;
  }
  let activeStyle;
  if (targetInfo?.active) {
    activeStyle = Styles.activeStyle;
  }
  let style = { ...Styles.link, ...activeStyle };
  const thisHref = link || href;
  return (
    <ReLink
      component={Item}
      atom="a"
      {...others}
      className="nav-link"
      style={style}
      onClick={(e) => {
        callfunc(onClick, [e]);
        callfunc(handleOn, [e]);
      }}
      scrollBack={!(0 === thisHref.indexOf("#"))}
      href={thisHref}
    >
      {thisIcon}
      {text}
    </ReLink>
  );
};

const HeaderNav = (props) => {
  return (
    <List
      atom="nav"
      style={{ ...Styles.nav, ...props.style }}
      className={props.className}
    >
      {get(props, ["nav", "link"], []).map((item, key) => {
        let targetId;
        const text = props.nav.text[key];
        const icon = props.nav.icon[key];
        if (0 === item.indexOf("#")) {
          targetId = item.substring(1);
          return (
            <SmoothScrollLink
              key={text}
              onClick={() => {
                setTimeout(() => history.pushState({}, "", item));
              }}
              link={item}
              text={text}
              icon={icon}
              handleOn={props.handleOn}
              /*scroll*/
              container={<NavItem />}
              targetId={targetId}
              scrollRefId={props.scrollRefId}
              scrollRefLoc="top"
            />
          );
        } else {
          return (
            <NavItem atom="a" key={text} icon={icon} text={text} href={item} />
          );
        }
      })}
    </List>
  );
};

export default HeaderNav;

const Styles = {
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "1.75rem 0.938rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    display: "block",
  },
  icon: {
    width: 13,
    height: 13,
    marginRight: 7,
    ovarflow: "hidden",
  },
  svg: {
    fill: "#fff",
  },
  activeStyle: {
    background: "#9f7676",
  },
  nav: {
    maxHeight: "70vh",
    overflowY: "auto",
  },
};

const Icons = {
  doc: <IcoDescription style={Styles.svg} />,
};
