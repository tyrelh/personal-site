import React from "react";
import "./footer.scss";
import {Icon} from "antd";
import Anchor from "./elements/Anchor";

export default class Footer extends React.Component {
  rssIcon = () => {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 124 124">
        <circle cx="20.3" cy="103.749" r="20"/>
        <path d="M67,113.95c0,5.5,4.5,10,10,10s10-4.5,10-10c0-42.4-34.5-77-77-77c-5.5,0-10,4.5-10,10s4.5,10,10,10C41.5,56.95,67,82.55,67,113.95z"/>
        <path d="M114,123.95c5.5,0,10-4.5,10-10c0-62.8-51.1-113.9-113.9-113.9c-5.5,0-10,4.5-10,10s4.5,10,10,10c51.8,0,93.9,42.1,93.9,93.9C104,119.45,108.4,123.95,114,123.95z"/>
      </svg>
    );
};

  render() {
    return (
      <footer>
        <p>
          Made with <Icon type="thunderbolt" theme="filled"/> by Tyrel Hiebert.<br/>
          {/*Copyright © 2020. <a href="https://www.github.com/tyrelh/personal-site/">View Source</a>.<br/>*/}
          License <Anchor href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License</Anchor>.<br/>
          <Anchor href="https://www.github.com/tyrelh/personal-site/"><Icon type="github" theme="filled"/> View Source</Anchor>.&nbsp;&nbsp;&nbsp;<Anchor href="https://tyrelh.github.io/rss.xml"><Icon component={this.rssIcon}/> Subscribe</Anchor>.
        </p>
      </footer>
    )
  }
}