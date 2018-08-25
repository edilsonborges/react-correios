import React, { Component } from "react";
import Header from "./components/layout/Header";
import Body from "./components/Body";
// import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "fontawesome";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
export default App;
