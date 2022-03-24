import React from "react";
import "./StickyHeader.scss";
import { Tooltip } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { Redirect } from "react-router-dom";

export default class StickyHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      redirectLink: ""
    }
  }

  handleOnClick = (link) => {
    this.setState({
      redirect: true,
      redirectLink: link
    }, () => window.scrollTo(0, 0));
  };

  render () {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirectLink} />;
    }

    return (
      <div
        id="sticky-header"
        className="sticky-header-hidden"
        onClick={() => this.handleOnClick(this.props.link)}
      >
        <Tooltip
          title="Home"
          placement="bottomLeft"
          arrowPointAtCenter
          mouseEnterDelay={0.2}
        >
          <HomeFilled />
        </Tooltip>
      </div>
    )
  }
}