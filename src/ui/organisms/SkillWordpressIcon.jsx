import React from "react";

import SkillIcon from "../molecules/SkillIcon";

const SkillWordpressIcon = (props) => (
  <SkillIcon
    color="#000"
    text="W"
    textStyle={{
      fill: "#fff",
      fontSize: 70,
      transform: "translate(50px, 5px)",
    }}
    {...props}
  />
);

export default SkillWordpressIcon;
