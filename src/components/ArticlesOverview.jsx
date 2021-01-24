import React from "react";
import "./ArticlesOverview.scss"
import { Icon, List } from "antd";
import mechkey1 from "../assets/img/mechkey.jpg";
import battlesnake2018 from "./articles/Battlesnake2018-1.jpg";
import grailsLogo from "./articles/GrailsAssetMigration.svg"
import darkModeToggleImage from "../assets/img/darkModeToggle/darkModeToggle.svg";
import lightshiftGameImage from "./articles/lightshift-game-2.png";
import denoTestsAndGithubActionsImage from "./articles/DenoTestsAndGithubActionsCI.png";
import nodeCICDPipeline from "./articles/node-cicd-pipeline-hero.png"
import sffPcPart1 from "./articles/sff-pc-part-1-5.jpg"
import { Redirect } from "react-router-dom";

const NUM_HOMEPAGE_ARTICLES = 10;

const getArticles = () => {
  const blogPerma = "/blog";
  const list = [];

  list.push({
    title: "SFF PC Build Part 1",
    description: "My first small form factor gaming PC. This first part describes the basic build and major components.",
    image: sffPcPart1,
    alt: "Side of computer with no side panel showing components lit up with red and blue LED lights",
    href: blogPerma + "/2021/sff-pc-part-1",
    date: "Jan 2nd, 2021"
  });
  
  list.push({
    title: "Node CI/CD Pipeline using Github Actions and AWS Elastic Beanstalk",
    description: "Here is my journey into creating an automated continuous integration and continuous deployment workflow for a project using Github Actions.",
    image: nodeCICDPipeline,
    alt: "Github Actions logo with colourful background and text that says GitHub Actions now with built-in CI/CD",
    href: blogPerma + "/2020/node-cicd-pipeline-using-github-actions-and-aws-elastic-beanstalk",
    date: "May 30th, 2020"
  });

  list.push({
    title: "Deno Tests and Github Actions CI",
    description: "As part of translating my JavaScript & Node Battlesnake project to TypeScript & Deno I wanted to setup continuous integration. It was so much easier than I imagined using Github Actions.",
    image: denoTestsAndGithubActionsImage,
    alt: "screenshot of deno and github logos",
    href: blogPerma + "/2020/deno-tests-and-github-actions",
    date: "May 23rd, 2020"
  });

  list.push({
    title: "Lightshift Game",
    description: "I started this project in 2018 to help teach myself better object-oriented programming structure, game update/draw loops, and JavaScript in general. Implemented using the P5.js framework for the draw loop and canvas drawing functionality with nothing else but vanilla JavaScript.",
    image: lightshiftGameImage,
    alt: "screenshot of lightshift arcade game",
    href: blogPerma + "/2020/lightshift-game",
    date: "Feb 1st, 2020"
  });

  list.push({
    title: "Dark Mode React Toggle",
    description: "I developed a dark and light theme for this site and built a toggle to switch between them. Also I used media queries to set the default theme to match the visitors operating system choice.",
    image: darkModeToggleImage,
    alt: "Sun and moon icons",
    href: blogPerma + "/2020/dark-mode-react-toggle",
    date: "Jan 28th, 2020"
  });

  list.push({
    title: "Migrating Frontend Assets During Grails 2 → 3 Upgrade",
    description: "Upgrading our application from Grails 2 to Grails 3 has been a long process. This is just one piece of that process.",
    image: grailsLogo,
    alt: "Grails 3 logo",
    href: blogPerma + "/2019/grails-frontend-asset-migration",
    date: "Dec 15th, 2019"
  });

  list.push({
    title: "Battlesnake Programming Competition 2018",
    description: "Battlesnake is a programming competition where participants create an AI server that acts as the brain of a snake in the classic game Snake. Participants compete in a round-robin tournament played out live in front of an audience of roughly 1000 people. The winner takes home up to $4,000.",
    image: battlesnake2018,
    alt: "Battlesnake 2018 logo",
    href: blogPerma + "/2018/battlesnake-2018",
    date: "June 11th, 2018"
  });

  list.push({
    title: "Building a Mechanical Keyboard from Scratch",
    description: "After becoming infatuiated with custom mechanical keyboards I decided to build my own. This is my journey through designing, aquiring parts for, building, and programming my own mechanical keyboard, complete with a custom layout I designed.",
    image: mechkey1,
    alt: "Mechanical keyboard on desk",
    href: blogPerma + "/2017/mechanical-keyboard",
    date: "April 20th, 2017"
  });

  return list;
};

const articleList = getArticles();

export default class ArticlesOverview extends React.Component {

  constructor(props) {
    super(props);
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

  render() {
    if ( this.state.redirect ) {
      return <Redirect push to={this.state.redirectLink} />;
    }

    return (
      <List
        itemLayout="vertical"
        size="large"
        split={false}
        pagination={{
          pageSize: NUM_HOMEPAGE_ARTICLES,
          total: articleList.length,
          hideOnSinglePage: true
        }}
        dataSource={articleList}
        renderItem={item => (
          <List.Item
            onClick={() => this.handleOnClick(item.href)}
            key={item.title}
            extra={
              <img
                className="article-overview-image"
                alt={item.alt}
                src={item.image}
              />
            }
          >
            <h3 className="article-overview-title">
              {item.title}
            </h3>
            {
              item.date &&
                <h4 className="article-overview-date">
                  <Icon type="calendar" theme="filled"/>{item.date}
                </h4>
            }
            <p className="article-overview-description">
              {item.description}
            </p>
          </List.Item>
        )}
      />
    )
  }
}