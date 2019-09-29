import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Redirect } from "react-router-dom";

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  render() {
    if ( this.state.redirect ) {
      return <Redirect push to={this.props.link} />;
    }

    const { breakpoints, currentBreakpoint } = this.props;
    return (
      <div>
        {breakpoints[currentBreakpoint] >= breakpoints.desktop ? (

          <div className="project-card" onClick={this.handleOnClick}>
            
              <Row start="sm" className="content">
                <Col xs={7}>
                  <h4><a href="title">{this.props.title}</a></h4>
                  {this.props.description}
                </Col>
                <Col xs={5} className="thumbnail">
                  <img style={{width: "100%"}} src={this.props.img} alt={this.props.alt} />
                </Col>
              </Row>
          </div>

        ) : (

          <div className="project-card" onClick={this.handleOnClick}>
            <h4><a href="title">{this.props.title}</a></h4>
            <Row start="sm" className="content thumbnail">
              <img src={this.props.img} alt={this.props.alt} />
            </Row>
            <Row start="sm" className="content">
              {this.props.description}
            </Row>
            
          </div>

        )}
      </div>
    );
  }
}