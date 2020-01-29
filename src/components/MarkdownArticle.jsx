import React from "react";
import Header from "./Header";
import SectionHeader from "./elements/SectionHeader";
// import article from "./article.md";
import Markdown from 'markdown-to-jsx';
import "./MarkdownArticle.scss";
import MarkdownAnchor from "./elements/MarkdownAnchor";

class MarkdownImage extends React.Component {
  state = {
    image: null
  };

  componentDidMount() {
    this.setState({
      image: require.context('./articles', true)(this.props.src)
    });
  }

  render() {
    return (
      <div className="image">
        <img src={this.state.image} alt={this.props.alt}/>
      </div>
    )
  }
}

export default class MarkdownArticle extends React.Component {
  state = {
    article: ""
  };

  componentDidMount() {
    fetch(require.context('./articles', true)(`./${this.props.name}.md`))
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        article: text
      })
    })
  }

  options = {
    overrides: {
      img: MarkdownImage,
      h1: Header,
      h2: SectionHeader,
      a: MarkdownAnchor
    },
  };

  render() {
    return (
      <div className="article fadeIn">
        <Markdown options={this.options}>
          {this.state.article}
        </Markdown>
      </div>
    )
  }
}