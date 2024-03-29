import React from "react";
import {BackTop} from "antd";
import Icon from "@ant-design/icons";
import "./BackToTop.scss";

export default class BackToTop extends React.Component {

  topIcon = () => {
    return (
      <svg className="back-top-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <path className="up-arrow-icon" d="M 5 11.300781 C 7.800781 7.101563 12.199219 3.300781 12.398438 3.199219 C 12.5 3.101563 12.800781 3 13 3 C 13.199219 3 13.5 3.101563 13.699219 3.199219 C 13.898438 3.300781 18.300781 7.199219 21.101563 11.300781 C 21.300781 11.601563 21.300781 12 21.199219 12.398438 C 21 12.699219 20.699219 13 20.300781 13 L 16.601563 13 C 16.601563 13 16.101563 21.699219 15.800781 22.101563 C 15.300781 22.601563 14.101563 23 13 23 C 11.898438 23 10.800781 22.601563 10.398438 22.101563 C 10.199219 21.699219 9.5 13 9.5 13 L 5.800781 13 C 5.398438 13 5.101563 12.800781 4.898438 12.398438 C 4.699219 12.101563 4.800781 11.699219 5 11.300781 Z"/>
      </svg>
    )
  };

  render() {
    return (
      <BackTop visibilityHeight={600}>
        <div className="back-top-background">
          <Icon component={this.topIcon}/>
        </div>
      </BackTop>
    )
  }
}