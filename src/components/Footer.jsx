import React from "react";
import "./footer.scss";
import {Icon} from "antd";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Made with <Icon type="heart" theme="filled" /> by Tyrel Hiebert
        </p>
      </footer>
    )
  }
}