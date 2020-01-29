import React from "react";
import {HashLink as Link, NavHashLink as NavLink} from "react-router-hash-link";

export default class MarkdownAnchor extends React.Component {
  buildAnchor() {
    switch (this.props.href.charAt(0)) {
      case "#":
        return (<Link to={this.props.href}>{this.props.children}</Link>);
      case "/":
        return (<NavLink to={this.props.href}>{this.props.children}</NavLink>);
      default:
        return (<a href={this.props.href}>{this.props.children}</a>);
    }
  };

  render() {
    return this.buildAnchor();
  }
}