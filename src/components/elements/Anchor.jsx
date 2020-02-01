import React from "react";
import {HashLink as Link, NavHashLink as NavLink} from "react-router-hash-link";
import "./Anchor.scss";

export default class Anchor extends React.Component {

  buildAnchor() {
    switch (this.props.href.charAt(0)) {
      case "#":
        return <Link to={this.props.href}>{this.props.children}</Link>;
      case "/":
        return <NavLink to={this.props.href}>{this.props.children}</NavLink>;
      default:
        return <a href={this.props.href} target="_blank" rel="noopener noreferrer">{this.props.children}</a>;
    }
  };

  render() {
    // const classN = this.props.classN ? this.props.classN : "";
    return(
      <span className="anchor">
        {this.buildAnchor()}
      </span>
    )
  }
}