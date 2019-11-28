import React from "react";
import {NavLink} from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./header.scss";

export default class Header extends React.Component {
  classN = this.props.classN ? this.props.classN : "";
  render() {
    return (
      <header className="fadeIn" id="top">
        {/* <div id="sticky-header" className="sticky-header-hidden">
          <NavLink exact to={this.state.link}>
            <h1 datatext={this.state.shortTitle}>
              {this.state.shortTitle}
            </h1>
          </NavLink>
        </div> */}
        <div className="nameContainer fadeIn">
          {(this.props.headerLink) ? 
            <NavLink exact to={this.props.headerLink}>
              <h1 datatext={this.props.headerTitle} className={this.classN}>
                {this.props.headerTitle}
              </h1>
            </NavLink>
          :
            <h1 datatext={this.props.headerTitle} className={this.classN}>
              {this.props.headerTitle}
            </h1>
          }
        </div>
        <ThemeToggle lightMode={this.props.lightMode}
          themeToggleOnClick={this.props.themeToggleOnClick} />
      </header>
    );
  }
}