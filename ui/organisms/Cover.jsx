import React, { useEffect, useState, useRef } from "react";

import Geometryangle from "organism-react-geometryangle";
import { SplashBlock } from "pmvc_react_landing";
import { ScrollReceiver } from "organism-react-scroll-nav";
import { Return } from "reshow";

import Me from "../organisms/Me";
import Introduce from "../organisms/Introduce";

const Cover = (props) => {
  const { targetInfo, me, introduce } = props;
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
      lastGeo.current.start();
      setIsRun(true);
    }
  }, [targetInfo]);
  return (
    <SplashBlock style={Styles.container}>
      <Me style={Styles.hero} me={me} />
      <Geometryangle ref={lastGeo} />
      <Introduce isRun={isRun} {...introduce} />
    </SplashBlock>
  );
};

const ScrollCover = (props) => (
  <ScrollReceiver
    {...props}
    targetId="design"
    scrollMargin={0}
    container={
      <Return initStates={["me", "introduce"]}>
        <Cover />
      </Return>
    }
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
  },
};
