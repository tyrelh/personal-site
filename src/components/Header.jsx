import React from "react";
import {NavLink} from "react-router-dom";
import ThemeToggle from "./ui/Toggle";
import "./header.scss";
import "../styles/toggle.scss"

export default class Header extends React.Component {
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
          {(this.props.link) ? 
            <NavLink exact to={this.props.link}>
              <h1 datatext={this.props.title}>
                {this.props.title}
              </h1>
            </NavLink>
          :
            <h1 datatext={this.props.title}>
              {this.props.title}
            </h1>
          }
        </div>
        <ThemeToggle />
      </header>
    )
  }
}