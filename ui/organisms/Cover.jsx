import React, { useEffect, useState, useRef } from "react";

import Geometryangle from "organism-react-geometryangle";
import { SplashBlock } from "pmvc_react_landing";
import { ScrollReceiver } from "organism-react-scroll-nav";
import { Return } from "reshow";

import Me from "../organisms/Me";
import Introduce from "../organisms/Introduce";

const Cover = ({ targetInfo }) => {
  const lastGeo = useRef();
  const [isRun, setIsRun] = useState();
  useEffect(() => {
    if (targetInfo.active || targetInfo.atTop) {
      setIsRun((prevIsRun) => {
        if (prevIsRun) {
          lastGeo.current.stop();
        }
        return false;
      });
    } else {
      if (targetInfo.scrollInfo?.isScrollUp) {
        history.pushState({}, "", "#");
      }
      lastGeo.current.start();
      setIsRun(true);
    }
  }, [targetInfo]);
  return (
    <SplashBlock style={Styles.container}>
      <Me style={Styles.hero} />
      <Geometryangle ref={lastGeo} />
      <Introduce isRun={isRun} />
    </SplashBlock>
  );
};

const ScrollCover = (props) => (
  <ScrollReceiver
    {...props}
    targetId="design"
    scrollMargin={0}
    container={Cover}
  />
);

export default ScrollCover;

const Styles = {
  container: {
    minHeight: 350,
    background: "#8e7481",
  },
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
  },
};
