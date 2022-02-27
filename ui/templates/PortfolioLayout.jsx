import React, { useRef } from "react";
import { OneColumn } from "pmvc_react_landing";
import { min, reactStyle } from "react-atomic-molecule";
import { PopupPool } from "organism-react-popup";
import { scrollStore } from "organism-react-scroll-nav";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const PortfolioLayout = ({ column, ...rest }) => {
  const init = useRef();
  if (!init.current) {
    init.current = true;
    scrollStore.scroller.dispatch({scrollMargin: 50});
  }

  switch (column) {
    case "one":
    default:
      return (
        <OneColumn
          {...rest}
          header={<Header />}
          footer={<Footer />}
          last={<PopupPool />}
        />
      );
  }
};

export default PortfolioLayout;

const Styles = {
  headerActive: reactStyle(
    {
      maxHeight: "100% !important",
    },
    ".page-header.active"
  ),
  minLgHeader: reactStyle(
    {
      background: "transparent !important",
      padding: "1.07rem 3rem",
      maxHeight: "100% !important",
    },
    [min.lg, ".page-header, .page-header.active"]
  ),
  minLgHeaderScrolling: reactStyle(
    {
      padding: "0 1.75rem !important",
      background: "#000 !important",
    },
    [min.lg, ".page-header.scrolling"]
  ),
  minLgHeaderNavLi: reactStyle(
    {
      display: "inline-block",
    },
    [min.lg, ".page-header ul li"]
  ),
  minLgBrand: reactStyle(
    {
      padding: "0 !important",
      position: "static !important",
    },
    [min.lg, ".page-header .brand"]
  ),
  minLgHamburger: reactStyle(
    {
      display: "none !important",
    },
    [min.lg, ".page-header .hamburger-icon"]
  ),
};
