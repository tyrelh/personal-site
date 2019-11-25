import React from "react";
import {Route} from "react-router-dom";

import Footer from "./components/Footer"
import Home from "./components/Home";
import Battlesnake2018 from "./components/articles/Battlesnake2018";
import Mechkeys from "./components/articles/Mechkeys";
import "./app.scss";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightMode: false
    };
  }

  themeToggleOnClick = async () => {
    await this.setState({
      lightMode: !this.state.lightMode
    });
    document.body.classList.toggle("light-mode");
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={(props) =>
          <Home {...props} lightMode={this.state.lightMode} themeToggleOnClick={this.themeToggleOnClick} />
        } />
        <Route path="/battlesnake2018" render={(props) => 
          <Battlesnake2018 {...props} lightMode={this.state.lightMode} themeToggleOnClick={this.themeToggleOnClick} />
        } />
        <Route path="/mechanicalkeyboard" render={(props) =>
          <Mechkeys {...props} lightMode={this.state.lightMode} themeToggleOnClick={this.themeToggleOnClick} />
        } />
        <Footer />
      </div>
    );
  }
}
