import React from "react";
import { Icon } from "antd";
import "./BackHome.scss";

export default class BackHome extends React.Component {

  render() {
    return (
      <div className="back-home-container">
        <Icon type="thunderbolt" theme="filled"/>
      </div>
    )
  }
}