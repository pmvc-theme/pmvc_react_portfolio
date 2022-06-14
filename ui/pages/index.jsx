import React from "react";
import Home from "./Home";
import { ClientRoute } from "reshow-url";

const themes = {
  home: Home,
};
const Index = (props) => {
  return (
    <ClientRoute
      {...props}
      themes={themes}
      defaultThemePath="home"
    />
  );
};

export default Index;
