import React from "react";
import "./footer.scss";
import {Icon} from "antd";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Made with <Icon type="thunderbolt" theme="filled" /> by Tyrel Hiebert
        </p>
      </footer>
    )
  }
}