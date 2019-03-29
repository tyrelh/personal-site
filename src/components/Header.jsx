import React from "react";
import { Redirect, Link, NavLink } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "TYREL HIEBERT",
      link: "/",
      // redirect: false
    }
  }

  // handleOnClick = () => {
  //   this.setState({ redirect: true });
  // }

  render() {
    // if ( this.state.redirect ) {
    //   return <Redirect exact push to={this.state.link} />
    // }
    return (
      <header className="fadeIn">
        {/* <div className="nameContainer" onClick={this.handleOnClick}> */}
        <div className="nameContainer">
          <NavLink exact to={this.state.link}><h1 datatext={this.state.title}>{this.state.title}</h1></NavLink>
        </div>
      </header>
    )
  }
}