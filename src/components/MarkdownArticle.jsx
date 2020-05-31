import React from "react";
import Header from "./Header";
import SectionHeader from "./elements/SectionHeader";
import Markdown from 'markdown-to-jsx';
import "./MarkdownArticle.scss";
import Anchor from "./elements/Anchor";

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
      <span className="image">
        <img src={this.state.image} alt={this.props.alt}/>
      </span>
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
      a: Anchor
    },
  };

  render() {
    return (
      <div className="article-container">
        <Markdown className="article fadeIn" options={this.options}>
          {this.state.article}
        </Markdown>
        <div className="contribute">
          Want to suggest a change to this article? <a href={`https://github.com/tyrelh/personal-site/blob/master/src/components/articles/${this.props.name}.md`} target="_blank" rel={"noopener noreferrer"}>Find it on Github</a>.
        </div>
      </div>
    )
  }
}