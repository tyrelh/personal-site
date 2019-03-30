import React from "react";
import scrollToElement from "scroll-to-element";
import { generateShowHourMinuteSecond } from "antd/lib/time-picker";

const ScrollToId = id => {
  scrollToElement(id, {
    offset: -20,
    align: "top",
    ease: "in-out-expo",
    duration: 800
  });
}

export default ScrollToId;