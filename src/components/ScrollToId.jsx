import React from "react";
import scrollToElement from "scroll-to-element";
import "./scrollToId.scss";

class ScrollToId extends React.Component {

  scrollToId = () => scrollToElement(`#${this.props.id}`, {
    offset: -20,
    align: "top",
    ease: "in-out-expo",
    duration: 1
  });

  render () {
    return (
      <span
        className="scrollToIdLink"
        onClick={this.scrollToId}
      >
        {this.props.children}
      </span>
    );
  }
}

export default ScrollToId;