import { useEffect, useRef } from "react";
import Typing from "organism-react-typing";
import get from "get-object-value";
import { SemanticUI } from "react-atomic-molecule";
import { Return } from "reshow";

const Introduce = ({ isRun }) => {
  const typeEl = useRef();
  useEffect(() => {
    if (isRun) {
      typeEl.current?.start();
    } else {
      typeEl.current?.stop();
    }
  }, [isRun]);

  return (
    <Return initStates={["introduce"]}>
      {({ introduce: { hd, bd, ft } = {} }) => (
        <SemanticUI style={Styles.container} className="introduce">
          <div className="hd" style={Styles.hd}>
            {hd}
          </div>
          <div className="bd" style={Styles.bd}>
            {get(bd, ["fixed"])}
            <Typing sec={get(bd, ["aniSec"], 3)} color="#fff" ref={typeEl}>
              {get(bd, ["animation"], []).map((item, key) => (
                <div key={key}>{item}</div>
              ))}
            </Typing>
          </div>
          <div className="ft" style={Styles.ft}>
            {ft}
          </div>
        </SemanticUI>
      )}
    </Return>
  );
};

export default Introduce;

const Styles = {
  container: {
    position: "absolute",
    bottom: "10%",
    marginLeft: "25px",
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "left",
  },
  hd: {
    fontSize: "18px",
    border: "1px solid #fff",
    borderLeft: "none",
    borderRight: "none",
    display: "inline",
    whiteSpace: "nowrap",
  },
  bd: {
    font: "50px/1.5 Montserrat,sans-serif",
    fontWeight: "700",
  },
  ft: {
    width: 300,
  },
};
