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
// import BackHome from "./components/elements/BackHome";
import NodeCICDPipeline from "./components/articles/NodeCICDPipeline";
import SFFPCPart1 from "./components/articles/ssf-pc-part-1";
import SFFPCPart2 from "./components/articles/sff-pc-part-2";

const blogPerma = "/blog";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ThemeToggle/>
        {/*<BackHome/>*/}
        <BackToTop/>
        <Route path="/" component={Home} exact />
        <Route path={`${blogPerma}/2021/sff-pc-part-2`} component={SFFPCPart2}/>
        <Route path={`${blogPerma}/2021/sff-pc-part-1`} component={SFFPCPart1}/>
        <Route path={`${blogPerma}/2020/node-cicd-pipeline-using-github-actions-and-aws-elastic-beanstalk`} component={NodeCICDPipeline}/>
        <Route path={`${blogPerma}/2020/deno-tests-and-github-actions`} component={DenoAndGithubActions}/>
        <Route path={`${blogPerma}/2020/lightshift-game`} component={LightshiftGame}/>
        <Route path={`${blogPerma}/2020/dark-mode-react-toggle`} component={DarkModeToggle}/>
        <Route path={`${blogPerma}/2019/grails-frontend-asset-migration`} component={GrailsAssetMigration}/>
        <Route path={`${blogPerma}/2018/battlesnake-2018`} component={Battlesnake2018}/>
        <Route path={`${blogPerma}/2017/mechanical-keyboard`} component={MechanicalKeyboard}/>
        {/*<Route component={Home} />*/}
        <Footer />
      </div>
    );
  }
}
