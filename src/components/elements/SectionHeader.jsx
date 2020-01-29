import React from "react";
import "./SectionHeader.scss";

export default class SectionHeader extends React.Component {
  render() {
    return (
      <h2>
        <span className="underline" id={this.props.id}>
          {this.props.children}
        </span>
      </h2>
    )
  }
}