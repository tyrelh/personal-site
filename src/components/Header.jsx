import React from "react";
import { Redirect, Link, NavLink } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "TYREL HIEBERT",
      link: "/",
    }
  }

  render() {
    return (
      <header className="fadeIn" id="top">
        <div id="sticky-header" className="sticky-header-hidden">
          <NavLink exact to={this.state.link}><h1 datatext={this.state.title}>{this.state.title}</h1></NavLink>
        </div>
        <div className="nameContainer">
          <NavLink exact to={this.state.link}><h1 datatext={this.state.title}>{this.state.title}</h1></NavLink>
        </div>
      </header>
    )
  }
}