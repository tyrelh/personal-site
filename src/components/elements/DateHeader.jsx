import React from "react";
import {Icon} from "antd";
import "./DateHeader.scss";

export default class DateHeader extends React.Component {
  render() {
    return (
      <div className="dateHeader">
        <h4>
          <Icon type="calendar" theme="filled"/> {this.props.children}
        </h4>
      </div>
    )
  }
}