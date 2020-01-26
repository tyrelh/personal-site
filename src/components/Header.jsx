import React from "react";
import {NavLink} from "react-router-dom";
import "./header.scss";

export default class Header extends React.Component {

  classN = this.props.classN ? this.props.classN : "";

  render() {
    return (
      <header className="fadeIn" id="top">
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
      </header>
    );
  }
}