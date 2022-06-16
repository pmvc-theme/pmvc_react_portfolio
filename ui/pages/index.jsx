import { lazy } from "react";
import { ClientRoute } from "reshow-url";

const themes = {
  Home: lazy(() => import("./Home")),
  Resume: lazy(() => import("./Resume")),
};
const Index = (props) => {
  return <ClientRoute {...props} themes={themes} defaultThemePath="Home" />;
};

export default Index;
