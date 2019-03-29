import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { withBreakpoints } from "react-breakpoints";
import ProjectCard from "./ProjectCard";
import battlesnake1 from "../assets/img/battlesnake-splash.png";
import battlesnake2018 from "../assets/img/battlesnake2018/battlesnake-2018.jpg";
import mechkey1 from "../assets/img/mechkey.jpg";

const projects = [
  {
    title: "BATTLESNAKE 2019",
    description: [
      <p>Battlesnake is a programming competition where participants create an AI server that acts as the brain in a multiplayer version of the classic game Snake.</p>
    ],
    img: battlesnake1,
    alt: "Battlesnake 2018 logo",
    link: "/battlesnake2018"
  },
  {
    title: "MECHANICAL KEYBOARD",
    description: [
      <p>I went a bit crazy and designed, build, and programed my own mechanical keyboard from scratch.</p>
    ],
    img: mechkey1,
    alt: "Mechanical keyboard on desk",
    link: "/mechanicalkeyboard"
  },
  {
    title: "BATTLESNAKE 2018",
    description: [
      <p>Battlesnake is a programming competition where participants create an AI server that acts as the brain in a multiplayer version of the classic game Snake.</p>
    ],
    img: battlesnake2018,
    alt: "Battlesnake 2018 logo",
    link: "/battlesnake2018"
  },
];

const renderCardsLarge = (breakpoints, currentBreakpoint) => {
  return projects.map(project => {
    return (
      <Row>
        <Col sm>
          <ProjectCard breakpoints={breakpoints} currentBreakpoint={currentBreakpoint} {...project} />
        </Col>
      </Row>
    )
  })
}

class ProjectsOverview extends React.Component {
  render () {
    const { breakpoints, currentBreakpoint } = this.props;
    return (
      <Grid style={{width: "100%"}}>
        {renderCardsLarge(breakpoints, currentBreakpoint)}
      </Grid>
    );
  }
}

export default withBreakpoints(ProjectsOverview);