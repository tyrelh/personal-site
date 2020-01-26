import React from "react";
import {Route} from "react-router-dom";

import Footer from "./components/Footer"
import Home from "./components/Home";
import Battlesnake2018 from "./components/articles/Battlesnake2018";
import Mechkeys from "./components/articles/Mechkeys";
import GrailsAssetMigration from "./components/articles/GrailsAssetMigration";
import ThemeToggle from "./components/elements/ThemeToggle";
import BackToTop from "./components/elements/BackToTop";
import "./app.scss";


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <ThemeToggle/>
        <BackToTop/>
        <Route path="/" component={Home} exact />
        <Route path="/battlesnake2018" component={Battlesnake2018}/>
        <Route path="/mechanicalkeyboard" component={Mechkeys}/>
        <Route path="/grailsAssetMigration" component={GrailsAssetMigration}/>
        <Footer />
      </div>
    );
  }
}
