import React from "react";
import {NavLink} from "react-router-dom";
import ThemeToggle from "./ui/Toggle";
import "./header.scss";
import "../styles/toggle.scss"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hi, I'm Tyrel.",
      shortTitle: "Tyrel Hiebert",
      link: "/",
    }
  }

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
        <div className="nameContainer">
          <NavLink exact to={this.state.link}>
            <h1 datatext={this.state.title}>
              {/* <span className="underline"> */}
              {this.state.title}
              {/* </span> */}
            </h1>
          </NavLink>
        </div>
        <ThemeToggle handleToggle={this.props.themeToggle} />
      </header>
    )
  }
}