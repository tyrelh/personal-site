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
import LightshiftGame from "./components/articles/LightshiftGame";
import DenoAndGithubActions from "./components/articles/DenoAndGithubActions";
import BackHome from "./components/elements/BackHome";
import NodeCICDPipeline from "./components/articles/NodeCICDPipeline";


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <ThemeToggle/>
        {/*<BackHome/>*/}
        <BackToTop/>
        <Route path="/" component={Home} exact />
        <Route path="/blog/2020/deno-tests-and-github-actions" component={DenoAndGithubActions}/>
        <Route path="/blog/2020/lightshift-game" component={LightshiftGame}/>
        <Route path="/blog/2020/dark-mode-react-toggle" component={DarkModeToggle}/>
        <Route path="/blog/2019/grails-frontend-asset-migration" component={GrailsAssetMigration}/>
        <Route path="/blog/2018/battlesnake-2018" component={Battlesnake2018}/>
        <Route path="/blog/2017/mechanical-keyboard" component={MechanicalKeyboard}/>
        <Route path={`${blogPerma}/2020/node-cicd-pipeline-using-github-actions-and-aws-elastic-beanstalk`} component={NodeCICDPipeline}/>
        {/*<Route component={Home} />*/}
        <Footer />
      </div>
    );
  }
}
