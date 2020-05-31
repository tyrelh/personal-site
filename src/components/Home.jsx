import React from "react";
import Header from "./Header";
import SectionHeader from "./elements/SectionHeader";
import ArticlesOverview from "./ArticlesOverview";
import Anchor from "./elements/Anchor";

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
            A software engineer constantly learning new skills and technologies. I work for <Anchor href="https://www.giftbit.com">Giftbit</Anchor> building great web services. You can see some of my work below as well as on my <Anchor href="https://github.com/tyrelh">Github</Anchor>.
          </p>

          <SectionHeader>
            Articles
          </SectionHeader>
          <ArticlesOverview/>

          <SectionHeader>
            Get in touch
          </SectionHeader>
          <p>
            Feel free to contact me via <Anchor href="mailto:tyrel.hiebert@gmail.com">email</Anchor>.
            {/*If you are interested, you can view my <Anchor href="https://tyrelh.github.io/docs/Tyrel-Hiebert-resume-online.pdf">CV</Anchor> for more details about my background and experience.*/}
          </p>
      </div>
    )
  }
}