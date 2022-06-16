import { useEffect, useRef } from "react";
import { CardView } from "react-atomic-organism";
import { useLazyInject, List, Unsafe } from "react-atomic-molecule";
import { Return } from "reshow";
import { UrlReturn } from "reshow-url";
import { marked } from "marked";
import get from "get-object-value";

import Header from "../molecules/AnimateHeader";
import Content from "../molecules/AnimateContent";
import Section from "../molecules/WhiteBlock";

let isInit;

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

const ItemList = ({ header, content, meta, id, anchor }) => {
  return (
    <List type="items" className="more" style={Styles.list}>
      {get(header, [], []).map((item, key) => (
        <CardView
          style={"#" + id[key] === anchor ? Styles.selected : null}
          header={header[key]}
          headerProps={{ ui: false }}
          meta={meta[key]}
          metaProps={{ style: { fontWeight: 900 } }}
          description={<Unsafe>{marked(content[key])}</Unsafe>}
          lineAtom="p"
          item={true}
          id={id[key]}
          key={meta[key]}
        />
      ))}
    </List>
  );
};

const DetailBody = (props) => {
  const { anchor, header, content, items } = props;
  useEffect(() => {
    if (!isInit) {
      isInit = true;
      console.log({ anchor });
    }
  }, []);
  return (
    <div>
      <Header style={Styles.header}>{header}</Header>
      <Content style={Styles.content}>{content}</Content>
      <ItemList {...{ ...items, anchor }} />
    </div>
  );
};

const Detail = (props) => {
  injects = useLazyInject(InjectStyles, injects);
  return (
    <Section name="detail">
      <UrlReturn initStates={{ ":hash": "anchor" }}>
        <DetailBody {...props} />
      </UrlReturn>
    </Section>
  );
};

export default Detail;

const Styles = {
  list: {
    padding: "0 10px",
  },
  selected: {
    padding: 20,
    background: "#f5f5dc",
    fontSize: "1.5rem",
  },
};

let injects;
const InjectStyles = {
  desc: [
    {
      color: "rgba(0,0,0,.5)",
      fontSize: "1.15rem",
    },
    ".ui.items.more>.item>.content>.description",
  ],
  meta: [
    {
      color: "#000 !important",
    },
    ".ui.items>.item .meta",
  ],
};
