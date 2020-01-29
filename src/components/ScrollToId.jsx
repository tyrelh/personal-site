import React from "react";
import "./scrollToId.scss";
import { HashLink as Link } from 'react-router-hash-link';

class ScrollToId extends React.Component {
  render () {
    return (
      <span className="scrollToIdLink">
        <Link to={`#${this.props.id}`}>
          {this.props.children}
        </Link>
      </span>
    );
  }
}

export default ScrollToId;