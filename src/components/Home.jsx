import React from "react";
import ProjectsOverview from "./ProjectsOverview";
import Header from "./Header";
import "./section.scss"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: ["Hi, I'm", <br/>, "Tyrel."],
      headerLink: "/",
    }
  }

  render() {
    return (
      <React.Fragment>
        <span className="homeTitle">
        <Header
          headerTitle={this.state.headerTitle}
          headerLink={this.state.headerLink}
          lightMode={this.props.lightMode}
          themeToggleOnClick={this.props.themeToggleOnClick}
        />
        </span>
        <section className="fadeIn">
          <p>
            I am a software engineer constantly learning new skills and technologies.
          </p>
          <p>
            Currently I am doing an internship at <a href="https://www.giftbit.com" alt="Giftbit">Giftbit</a> as a Junior Developer.
          </p>
          <p>
            You can see some of my work below as well as on my <a href="https://github.com/tyrelh" alt="Github">Github</a>.
          </p>
        </section>

        <section className="fadeIn">
          <h3>
            <span className="underline">
              Projects
            </span>
          </h3>
          <ProjectsOverview />
        </section>

        <section className="fadeIn">
          <h3>
            <span className="underline">
              Get in touch
            </span>
          </h3>
          <p>
            Feel free to contact me via <a href="mailto:tyrel.hiebert@gmail.com" alt="email">email</a>. If you are interested, you can view my <a href="https://tyrelh.github.io/docs/Tyrel-Hiebert-resume-online.pdf" alt="CV">CV</a> for more details about my background and experience.
          </p>
        </section>
      </React.Fragment>
    )
  }
}