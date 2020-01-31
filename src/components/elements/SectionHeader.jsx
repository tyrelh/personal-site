import React from "react";
import "./SectionHeader.scss";
import {Icon} from "antd";

export default class SectionHeader extends React.Component {
  render() {
    return (
      <h2>
        {/*<Icon className="heading-link-icon" type="link" />*/}
        <span className="underline" id={this.props.id}>
          {this.props.children}
        </span>
      </h2>
    )
  }
}