import React from "react";
import { CalendarFilled } from "@ant-design/icons";
import "./DateHeader.scss";

export default class DateHeader extends React.Component {
  render() {
    return (
      <div className="dateHeader">
        <h4>
        <CalendarFilled />  {this.props.children}
        </h4>
      </div>
    )
  }
}