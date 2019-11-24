import React from "react";
import ProjectsOverview from "./ProjectsOverview";
import Header from "./Header";
import "./section.scss"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hi, I'm Tyrel.",
      link: "/",
    }
  }

  render() {
    return (
      <React.Fragment>
      <Header title={this.state.title} link={this.state.link} />
        <section className="fadeIn">
          <p>
            I am currently studying Computer Science at the University of Victoria. My focus has been software development, artificial intelligence, and data science. Currently I am doing an internship at <a href="https://www.giftbit.com" alt="Giftbit">Giftbit</a> as a Junior Developer here in Victoria.
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
          <p>
            Here are some recent projects I have worked on. Click in to read the full article.
          </p>
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