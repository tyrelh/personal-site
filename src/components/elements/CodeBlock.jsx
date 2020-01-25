import React from "react"

export class CodeBlock extends React.Component {
  render() {
    const { code } = this.props;
    return (
      <div className="code-block">
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </div>
    )
  }
}

export class Code extends React.Component {
  render() {
    const { code } = this.props;
    return (
      <code className="code-inline">{code}</code>
    )
  }
}