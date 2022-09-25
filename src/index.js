import { lazy } from "react";

const themes = {
  Home: lazy(() => import("./ui/pages/Home")),
  Resume: lazy(() => import("./ui/pages/Resume")),
};

export default themes;
