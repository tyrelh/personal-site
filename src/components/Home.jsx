import React from "react";
import ProjectsOverview from "./ProjectsOverview";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="fadeIn">
          <h3><span className="underline">ABOUT</span></h3>
          <p>
            I am currently completing my bachelors degree in Computer Science at the University of Victoria. My focus has been software development, artificial intelligence, and data science. Currently I am doing an internship at <a href="https://www.giftbit.com" alt="Giftbit">Giftbit</a> here in Victoria.
          </p>
          <p>
            You can check out some of my projects below as well as on my <a href="https://github.com/tyrelh" alt="Github">Github</a>.
          </p>
        </section>

        <section className="fadeIn">
          <h3><span className="underline">PROJECTS</span></h3>
          <p>
            Here are some recent projects I have worked on. Click in to read the full article.
          </p>
          <ProjectsOverview />
        </section>

        <section className="fadeIn">
          <h3><span className="underline">GET IN TOUCH</span></h3>
          <p>
            Feel free to contact me via <a href="#email" alt="email">email</a>. If you are interested, you can view my <a href="#cv" alt="CV">CV</a> for more details about my background and experience.
          </p>
        </section>
      </React.Fragment>
    )
  }
}