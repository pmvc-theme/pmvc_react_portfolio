import { useEffect } from "react";
import { EventTimeline } from "organism-react-event-timeline";
import { scrollStore } from "organism-react-scroll-nav";
import get from "get-object-value";
import { pageWidth } from "react-atomic-molecule";

import WhiteBlock from "../molecules/WhiteBlock";
import Header from "../molecules/AnimateHeader";
import Content from "../molecules/AnimateContent";
import goTo from "../../src/goTo";

const ExperienceBody = ({ header, content, events, link }) => {
  useEffect(() => {
    scrollStore.scroller.scrollMonitor();
  }, []);
  const arrEvent = [];
  const handler = {
    click: (e) => {
      goTo(e.data.link);
    },
  };
  get(events, ["header"], []).forEach((item, k) => {
    arrEvent.push({
      header: item,
      description: events.content[k].split("[br]"),
      from: events.from[k].split(","),
      to: events.to[k].split(","),
      link: events.link[k],
    });
  });
  return (
    <>
      <Header style={Styles.header}>{header}</Header>
      {content && <Content style={Styles.content}>{content}</Content>}
      <EventTimeline
        events={arrEvent}
        animate={{
          enter: "fadeInLeft",
        }}
        evenAnimate={{
          enter: "fadeInRight",
        }}
        onEventClick={handler.click}
      />
    </>
  );
};

const Experience = () => (
  <WhiteBlock name="experience" style={Styles.container} backgroundStyle={Styles.containerBackground}>
    <ExperienceBody />
  </WhiteBlock>
);

export default Experience;

const Styles = {
  containerBackground: {
    background:
      "url(//cdn.jsdelivr.net/npm/pmvc_react_portfolio/photos/pattern.svg) 50% 50% / cover no-repeat #3C5B65",
  },
  container: {
    color: "#fff",
    maxWidth: pageWidth.xl,
  },
};
