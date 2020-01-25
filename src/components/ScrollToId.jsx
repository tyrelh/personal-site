import React from "react";
import scrollToElement from "scroll-to-element";
import "./scrollToId.scss";

class ScrollToId extends React.Component {

  id = `#${this.props.id}`;

  scrollToId = () => scrollToElement(this.id, {
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
        alt={this.props.alt}
      >
        {this.props.children}
      </span>
    );
  }
}

export default ScrollToId;