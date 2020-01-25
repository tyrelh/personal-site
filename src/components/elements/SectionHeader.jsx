import React from "react";
import "./SectionHeader.scss";

export default class SectionHeader extends React.Component {
  render() {
    return (
      <h3>
        <span className="underline">
          {this.props.children}
        </span>
      </h3>
    )
  }
}