import React from "react";
import "./themeToggle.scss";
import {Tooltip} from "antd";

export default class ThemeToggle extends React.Component {
  
  componentDidMount() {
    const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (!userPrefersDarkMode && !this.props.lightMode) {
      this.props.themeToggleOnClick()
    }
  }

  render() {
    return (
      <Tooltip
        title="Toggle Color Theme"
        placement="bottomRight"
        arrowPointAtCenter
        mouseEnterDelay={0.3}
      >
        <div className="toggle-container">
          <input
            className="toggle"
            id="toggle"
            type="checkbox"
            onChange={this.props.themeToggleOnClick}
            checked={this.props.lightMode}
          />
          <label className="toggle-label" htmlFor="toggle">
            <span className="toggle-knob" />
          </label>
        </div>
      </Tooltip>
    );
  }
}