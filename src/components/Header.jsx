import React from "react";
import {NavLink} from "react-router-dom";
import "./header.scss";

export default class Header extends React.Component {

  classN = this.props.classN ? this.props.classN : "";

  render() {
    return (
      <header className="fadeIn" id="top">
        <div className="nameContainer fadeIn">
            <NavLink exact to="/">
              <h1 datatext={this.props.headerTitle} className={this.classN}>
                <span className="underline">
                  {this.props.headerTitle}
                  {
                    (this.props.children) ?
                      this.props.children
                      :
                      null
                  }
                </span>
              </h1>
            </NavLink>
        </div>
      </header>
    );
  }
}