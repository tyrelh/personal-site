import React from "react";
import "./themeToggle.scss";

export default class ThemeToggle extends React.Component {
  
  componentDidMount() {
    const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (!userPrefersDarkMode && this.props.lightMode) {
      this.props.themeToggleOnClick()
    }
  }

  render() {
    return (
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
    );
  }
}