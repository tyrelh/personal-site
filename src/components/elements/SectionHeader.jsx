import React from "react";
import "./SectionHeader.scss";

export default class SectionHeader extends React.Component {
  render() {
    return (
      <h3>
        <span className="underline" id={this.props.id}>
          {this.props.children}
        </span>
      </h3>
    )
  }
}