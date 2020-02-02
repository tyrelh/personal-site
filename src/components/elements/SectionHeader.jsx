import React from "react";
import "./SectionHeader.scss";
import {Icon} from "antd";
import {HashLink as Link} from "react-router-hash-link";

export default class SectionHeader extends React.Component {
  render() {
    const href = `#${this.props.id}`;
    return (
      <h2>
        <span className="underline" id={this.props.id}>
          {this.props.children}
        </span>
        <Link to={href}>
          <Icon className="heading-link-icon" type="link" />
        </Link>
      </h2>
    )
  }
}