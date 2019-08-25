import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/styles.scss";
import Header from "./components/Header";
// import Main from "./components/Main";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Battlesnake2018 from "./components/articles/Battlesnake2018";
import Mechkeys from "./components/articles/Mechkeys";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true
    }
  }

  themeToggleOnClick = async () => {
    await this.setState({
      darkMode: !this.state.darkMode
    });
    // console.log(`Set theme to ${this.state.darkMode ? "dark" : "light"}.`);
    document.body.classList.toggle("light-mode");
  }

  render() {
    return (
      <div className="app">
        <Header themeToggle={this.themeToggleOnClick} />
        <Route exact path="/" component={Home} />
        <Route path="/battlesnake2018" component={Battlesnake2018} />
        <Route path="/mechanicalkeyboard" component={Mechkeys} />
        <Footer />
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