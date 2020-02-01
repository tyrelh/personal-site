import React from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Battlesnake2018 from "./components/articles/Battlesnake2018";
import MechanicalKeyboard from "./components/articles/MechanicalKeyboard";
import GrailsAssetMigration from "./components/articles/GrailsAssetMigration";
import ThemeToggle from "./components/elements/ThemeToggle";
import BackToTop from "./components/elements/BackToTop";
import "./app.scss";
import DarkModeToggle from "./components/articles/DarkModeToggle";


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <ThemeToggle/>
        <BackToTop/>
        <Route path="/" component={Home} exact />
        <Route path="/dark-mode-react-toggle-2020" component={DarkModeToggle}/>
        <Route path="/grails-frontend-asset-migration-2019" component={GrailsAssetMigration}/>
        <Route path="/battlesnake-2018" component={Battlesnake2018}/>
        <Route path="/mechanical-keyboard-2017" component={MechanicalKeyboard}/>
        {/*<Route component={Home} />*/}
        <Footer />
      </div>
    );
  }
}
