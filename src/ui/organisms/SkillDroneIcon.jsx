import React from "react";

import SkillIcon from "../molecules/SkillIcon";

const Logo = (props) => (
  <g
    style={{
      transform: "scale(2) translate(12px, 12px)",
      transformOrigin: "0 0",
    }}
  >
    <path
      d="M5.375 3l-.115.114 4.675 4.657c-.66 1.028-1.042 2.29-1.042 3.727 0 3.993 2.943 6.644 6.67 6.644 1.393 0 2.677-.37 3.738-1.043L24 21.78C21.565 24.983 17.696 27 13.34 27 5.974 27 0 21.232 0 13.712 0 9.24 2.113 5.388 5.375 3zM8 1.26C9.732.448 11.67 0 13.717 0 21.052 0 27 5.764 27 13.28c0 2.067-.45 4.001-1.255 5.72l-4.21-4.209c.658-1.027 1.037-2.29 1.037-3.725 0-3.99-2.93-6.64-6.641-6.64-1.387 0-2.665.37-3.721 1.042L8 1.26zM16 15c-2.235 0-4-1.596-4-4s1.765-4 4-4c2.235 0 4 1.596 4 4s-1.765 4-4 4z"
      fill="#fff"
      fillRule="nonzero"
    />
  </g>
);

const SkillDroneIcon = (props) => (
  <SkillIcon color="#1E375A" {...props}>
    <Logo />
  </SkillIcon>
);

export default SkillDroneIcon;
