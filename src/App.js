import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Body from "./components/Body";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/App.css";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Navbar />
            <Route path="/:object?" component={Body} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
