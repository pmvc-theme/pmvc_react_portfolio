import { lazy } from "react";
import { SemanticUI } from "react-atomic-molecule";
import { ScrollSpy } from "organism-react-scroll-nav";
import ScrollAnimate from "organism-react-scroll-animate";

import HeaderContent from "../molecules/HeaderContent";
import SvgBlackBlock from "../molecules/SvgBlackBlock";
import WhiteBlock from "../molecules/WhiteBlock";
import Cover from "../organisms/Cover";
import Portfolio from "../organisms/Portfolio";
import AboutMe from "../organisms/AboutMe";
import SkillSet from "../organisms/SkillSet";
import MyTime from "../organisms/MyTime";
import Detail from "../organisms/Detail";
import Contact from "../organisms/Contact";
import PortfolioLayout from "../templates/PortfolioLayout";

const Body = (props) => {
  return (
    <>
      <ScrollSpy id="design">
        <SvgBlackBlock name="design">
          <HeaderContent />
        </SvgBlackBlock>
        <WhiteBlock
          name="portfolio"
          style={{
            padding: "40px 0",
            maxWidth: null,
          }}
        >
          <Portfolio />
        </WhiteBlock>
      </ScrollSpy>
      <ScrollSpy id="about-me">
        <SvgBlackBlock name="aboutme">
          <AboutMe />
        </SvgBlackBlock>
        <WhiteBlock name="skillset">
          <SkillSet />
        </WhiteBlock>
      </ScrollSpy>
      <ScrollSpy id="mytime">
        <MyTime />
      </ScrollSpy>
      <ScrollAnimate
        scrollMargin={-100}
        id="experience"
        monitorScroll={true}
        style={{ background: "#3C5B65" }}
      >
        {() => lazy(() => import("../organisms/Experience"))}
      </ScrollAnimate>
      <ScrollSpy id="detail">
        <Detail />
      </ScrollSpy>
      <ScrollSpy id="contact">
        <Contact />
      </ScrollSpy>
    </>
  );
};

const Home = () => (
  <PortfolioLayout
    cover={<Cover />}
    body={<Body />}
    contentWrapper={{
      style: Styles.contentWrapper,
    }}
  />
);

export default Home;

const Styles = {
  contentWrapper: {
    top: "100%",
  },
};
