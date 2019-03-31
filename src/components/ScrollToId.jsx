import React from "react";
import scrollToElement from "scroll-to-element";
import { generateShowHourMinuteSecond } from "antd/lib/time-picker";
import renderEmpty from "antd/lib/config-provider/renderEmpty";

class ScrollToId extends React.Component {

  id = `#${this.props.id}`;

  scrollToId = () => scrollToElement(this.id, {
    offset: -20,
    align: "top",
    ease: "in-out-expo",
    duration: 800
  });

  render () {
    return (
      <a 
        onClick={this.scrollToId}
        alt={this.props.alt}
      >
        {this.props.children}
      </a>
    );
  }
}

export default ScrollToId;