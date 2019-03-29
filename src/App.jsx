import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/styles.scss";
import Header from "./components/Header";
// import Main from "./components/Main";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Battlesnake2018 from "./components/articles/Battlesnake2018";
import Mechkeys from "./components/articles/Mechkeys";
// import Particles from "particlesjs";

export default class App extends React.Component {
  // initialization for particles.js
  // componentDidMount() {
  //   Particles.init({
  //     selector: ".stars",
  //     maxParticles: 300,
  //     sizeVariations: 1.5,
  //     speed: 0.1,
  //     color: ["#ddd", "#999"],
  //   });
  // }

  render() {
    return (
      <div className="app">
        <Header />
        {/* <Main /> */}
        <Route exact path="/" component={Home} />
        <Route path="/battlesnake2018" component={Battlesnake2018} />
        <Route path="/mechanicalkeyboard" component={Mechkeys} />
        <Footer />
        {/* particles.js canvas */}
        {/* <canvas className="stars"></canvas> */}
        <div className="stars-big"></div>
        <div className="stars-small"></div> 
      </div>
    );
  }
}





// export default class Main extends React.Component {
//   render() {
//     return (
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/battlesnake2018" component={Battlesnake2018} />
//         <Route path="/mechanicalkeyboard" component={Mechkeys} />
//       </Switch>
//     )
//   }
// }