import React from "react";
import ScrollToId from "./ScrollToId";
import "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          <ScrollToId id="top" alt="scroll back to the top of the page">
            Back to Top
          </ScrollToId>
        </p>
      </footer>
    )
  }
}