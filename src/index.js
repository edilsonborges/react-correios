import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
require("dotenv").config();

console.log(process.env);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
