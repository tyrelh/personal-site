import React from "react";
import ReactMarkdown from "react-markdown";
import "./Code.scss";

export class CodeBlock extends React.Component {
  render() {
    const { code, isMarkdown, input } = this.props;
    if (isMarkdown) {
      return (
        <ReactMarkdown source={input}/>
      );
    }
    return (
      <div className="code-block">
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </div>
    );
  }
}

export class Code extends React.Component {
  render() {
    return (
      <code className="code-inline">
        {this.props.children}
      </code>
    );
  }
}