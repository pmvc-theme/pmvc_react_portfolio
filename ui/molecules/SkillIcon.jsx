import React from "react";
import { SemanticUI } from "react-atomic-molecule";

const TSpan = (props) => (
  <tspan {...props} x="0" dy="1em" textAnchor="middle" />
);

const SkillIcon = ({
  children,
  color,
  text,
  textStyle,
  transform,
  ...props
}) => (
  <SemanticUI {...props}>
    <circle cx="50" cy="50" r="50" style={{ fill: color }} />
    {text && (
      <text
        style={{
          ...Styles.text,
          ...textStyle,
        }}
        transform={transform}
      >
        {text.map ? (
          text.map((v, k) => <TSpan key={k}>{v}</TSpan>)
        ) : (
          <TSpan>{text}</TSpan>
        )}
      </text>
    )}
    {children}
  </SemanticUI>
);

SkillIcon.defaultProps = {
  viewBox: "0 0 100 100",
  atom: "svg",
  width: "100%",
  transform: "translate(50, 30)",
};

export default SkillIcon;

const Styles = {
  text: {
    fontSize: 30,
    fill: "#f3f3f3",
    fontFamily: "PoiretOne-Regular, Poiret One",
  },
};
