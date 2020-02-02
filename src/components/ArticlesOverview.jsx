import React from "react";
import "./ArticlesOverview.scss"
import { Icon, List } from "antd";
import mechkey1 from "../assets/img/mechkey.jpg";
import battlesnake2018 from "./articles/Battlesnake2018-1.jpg";
import grailsLogo from "./articles/GrailsAssetMigration.svg"
import darkModeToggleImage from "../assets/img/darkModeToggle/darkModeToggle.svg";
import lightshiftGameImage from "./articles/lightshift-game-2.png";
import { Redirect } from "react-router-dom";

const getArticles = () => {
  const blogPerma = "/blog";
  const list = [];

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
          pageSize: 5,
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
                width={230}
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