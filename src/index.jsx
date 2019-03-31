import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ReactBreakpoints from "react-breakpoints";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import checkHeader from "./checkHeader";

const breakpoints = {
  mobile: 320,
  desktop: 1200,
  desktopWide: 1920,
}

window.addEventListener("scroll", checkHeader);

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <ReactBreakpoints breakpoints={breakpoints}>
        <App />
      </ReactBreakpoints>
    </ScrollToTop>
  </HashRouter>,
  document.getElementById("app")
);