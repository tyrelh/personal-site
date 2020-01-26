import React from "react";
import "./ArticlesOverview.scss"
import { List } from "antd";
import mechkey1 from "../../assets/img/mechkey.jpg";
import battlesnake2018 from "../../assets/img/battlesnake2018/battlesnake-2018.jpg";
import {Redirect} from "react-router-dom";

const getArticles = () => {
  const list = [];

  // list.push({
  //   title: "Migrating Frontend Assets During Grails 2 -> 3 Upgrade",
  //   description: "Some description",
  //   image: battlesnake2018,
  //   alt: "Grails 3 logo",
  //   href: "/grailsAssetMigration"
  // });

  list.push({
    title: "Battlesnake Programming Competition 2018",
    description: "Battlesnake is a programming competition where participants create an AI server that acts as the brain of a snake in the classic game Snake. Participants compete in a round-robin tournament played out live in front of an audience of roughly 1000 people. The winner takes home up to $4,000.",
    image: battlesnake2018,
    alt: "Battlesnake 2018 logo",
    href: "/battlesnake2018"
  });

  list.push({
    title: "Building a Mechanical Keyboard from Scratch",
    description: "After becoming infatuiated with custom mechanical keyboards I decided to build my own. This is my journey through designing, aquiring parts for, building, and programming my own mechanical keyboard, complete with a custom layout I designed.",
    image: mechkey1,
    alt: "Mechanical keyboard on desk",
    href: "/mechanicalkeyboard"
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
            // actions={[
            //   <IconText type="star-o" text="156" key="list-vertical-star-o" />,
            //   <IconText type="like-o" text="156" key="list-vertical-like-o" />,
            //   <IconText type="message" text="2" key="list-vertical-message" />,
            // ]}
            extra={
              <img width={300} alt={item.alt} src={item.image}/>
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          {/* MAYBE MOVE DESCRIPTION HERE AND USE description FOR THE DATE OF ARTICLE */}
          {/*  {item.description}  */}
          </List.Item>
        )}
      />
    )
  }
}