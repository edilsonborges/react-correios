import React, { Component } from "react";
import Header from "./components/layout/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/:object?" component={Body} />
        </div>
      </Router>
    );
  }
}
export default App;
