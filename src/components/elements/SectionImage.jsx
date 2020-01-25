import React from "react";
import "./SectionImage.scss";

export default class SectionImage extends React.Component {
  render() {
    return (
      <div className="image">
        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
      </div>
    )
  }
}