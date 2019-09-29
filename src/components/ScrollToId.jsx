import React from "react";
import scrollToElement from "scroll-to-element";

class ScrollToId extends React.Component {

  id = `#${this.props.id}`;

  scrollToId = () => scrollToElement(this.id, {
    offset: -20,
    align: "top",
    ease: "in-out-expo",
    duration: 700
  });

  render () {
    return (
      <a 
        onClick={this.scrollToId}
        alt={this.props.alt}
        href={this.props.id}
      >
        {this.props.children}
      </a>
    );
  }
}

export default ScrollToId;