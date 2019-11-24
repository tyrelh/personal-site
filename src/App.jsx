import React from "react";
import {Route} from "react-router-dom";

import Footer from "./components/Footer"
import Home from "./components/Home";
import Battlesnake2018 from "./components/articles/Battlesnake2018";
import Mechkeys from "./components/articles/Mechkeys";
import "./app.scss";


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route path="/battlesnake2018" component={Battlesnake2018} />
        <Route path="/mechanicalkeyboard" component={Mechkeys} />
        <Footer />
      </div>
    );
  }
}
