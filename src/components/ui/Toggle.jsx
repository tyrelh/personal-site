import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="toggle-container">
        <input
          className="toggle"
          id="toggle"
          type="checkbox"
          onChange={this.props.handleToggle}
        />
        <label className="toggle-label" htmlFor="toggle">
          <span className="toggle-knob" />
        </label>
      </div>
    );
  }
}