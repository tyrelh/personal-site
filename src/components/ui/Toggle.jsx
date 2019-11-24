import React from "react";

export default class ThemeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightMode: false
    };
  }

  themeToggleOnClick = async () => {
    await this.setState({
      lightMode: !this.state.lightMode
    });
    document.body.classList.toggle("light-mode");
  }

  componentDidMount() {
    const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (!userPrefersDarkMode) {
      this.themeToggleOnClick()
    }
  }

  render() {
    return (
      <div className="toggle-container">
        <input
          className="toggle"
          id="toggle"
          type="checkbox"
          onChange={this.themeToggleOnClick}
          checked={this.state.lightMode}
        />
        <label className="toggle-label" htmlFor="toggle">
          <span className="toggle-knob" />
        </label>
      </div>
    );
  }
}