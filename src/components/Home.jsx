import React from "react";
import Header from "./Header";
import SectionHeader from "./elements/SectionHeader";
import ArticlesOverview from "./ArticlesOverview";

export default class Home extends React.Component {
  state = {
    headerTitle: "Hi, I'm Tyrel.",
    headerLink: "/",
  };

  render() {
    return (
      <div className="article fadeIn">
        <span className="homeTitleContainer">
          <Header
            headerTitle={this.state.headerTitle}
            headerLink={this.state.headerLink}
            classN="homeTitle"
          />
        </span>
          <p>
            Software engineer constantly learning new skills and technologies. Work for <a href="https://www.giftbit.com">Giftbit</a> building great web services. You can see some of my work below as well as on my <a href="https://github.com/tyrelh">Github</a>.
          </p>

          <SectionHeader>
            Articles
          </SectionHeader>
          <ArticlesOverview/>

          <SectionHeader>
            Get in touch
          </SectionHeader>
          <p>
            Feel free to contact me via <a href="mailto:tyrel.hiebert@gmail.com" alt="email">email</a>. If you are interested, you can view my <a href="https://tyrelh.github.io/docs/Tyrel-Hiebert-resume-online.pdf" alt="CV">CV</a> for more details about my background and experience.
          </p>
      </div>
    )
  }
}