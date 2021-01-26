import React from "react";
import "./StickyHeader.scss";
import {Icon} from "antd";
import {NavHashLink as NavLink} from "react-router-hash-link";

export default class StickyHeader extends React.Component {
  render () {
    return (
      // <Tooltip
      //   title="Home"
      //   placement="bottomLeft"
      //   arrowPointAtCenter
      //   mouseEnterDelay={0.2}
      // >
        <div id="sticky-header" className="sticky-header-hidden">
          <NavLink to={this.props.link}>
              {/* <h1 datatext={this.props.text}>
                {this.props.text}
              </h1> */}
              <Icon type="home" theme="filled"/>
            </NavLink>
        </div>
      // </Tooltip>
    )
  }
}