import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import ReactBreakpoints from "react-breakpoints";
import App from "./App";
import checkHeaderPos from "./tools/checkHeaderPos"

const breakpoints = {
  mobile: 320,
  desktop: 1200,
  desktopWide: 1920,
};

window.addEventListener("scroll", checkHeaderPos);

ReactDOM.render(
  <HashRouter>
    <ReactBreakpoints breakpoints={breakpoints}>
      <App />
    </ReactBreakpoints>
  </HashRouter>,
  document.getElementById("root")
);