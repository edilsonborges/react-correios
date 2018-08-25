import React, { Component } from "react";
import Header from "./components/layout/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";

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
