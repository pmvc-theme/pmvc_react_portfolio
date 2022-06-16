import getOffset from "getoffset";
import query from "css-query-selector";
import smoothScrollTo from "smooth-scroll-to";
import { urlDispatch } from "reshow-url";

const getHash = () => {
  const url = document.URL;
  const anchorStart = url.indexOf("#");
  if (-1 === anchorStart) {
    return false;
  }
  const anchor = url.substring(anchorStart);
  if (!anchor) {
    return false;
  }
  return { anchor, anchorStart, url };
};

const defaultUpdateUrl = (node) => {
  const toNode = query.el(node);
  let hash = toNode.id;
  if (!hash) {
    hash = toNode.name;
  }
  urlDispatch("anchor", hash);
};

const handleWithUrl = () => {
  return;
  const { anchor } = getHash();
  if (!anchor) {
    return true;
  }
  return _goTo(anchor);
};

let lastTo;
const _goTo = (node) => {
  const toNode = query.el(node);
  if (!toNode) {
    console.warn("Not found node", node);
    return false;
  }
  const dHeader = query.one("#header");
  const headerPos = getOffset(dHeader);

  let i = 5;
  const tune = (delay) => {
    if (!i) {
      return;
    }
    i--;
    let pos = getOffset(toNode);
    let to = pos.top - (headerPos.bottom - headerPos.top) - 20;
    if (lastTo === to) {
      i = 0;
    }
    lastTo = to;
    smoothScrollTo(to, delay, null, () => setTimeout(() => tune(200), 300));
  };
  tune();
  return true;
};

const goTo = (node, updateUrl = defaultUpdateUrl) => {
  updateUrl(node);
  return _goTo(node);
};

export default goTo;
export { handleWithUrl, getHash };
