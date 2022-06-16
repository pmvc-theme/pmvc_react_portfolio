import React from "react";

import SkillIcon from "../molecules/SkillIcon";

const Logo = (props) => (
  <g
    style={{
      transform: "scale(.3) translate(60px, 50px)",
      transformOrigin: "0 0",
    }}
  >
    <path
      fill="#ddd"
      d="M130,29v132c0,14.77,10.19,23,21,23c10,0,21-7,21-23V30c0-13.54-10-22-21-22S130,17.33,130,29z"
    />
    <path
      fill="#fff"
      d="M75,96v65c0,14.77,10.19,23,21,23c10,0,21-7,21-23V97c0-13.54-10-22-21-22S75,84.33,75,96z"
    />
    <circle fill="#fff" cx="41" cy="163" r="21" />
  </g>
);

const SkillGaIcon = (props) => (
  <SkillIcon color="#e37400" {...props}>
    <Logo />
  </SkillIcon>
);

export default SkillGaIcon;
