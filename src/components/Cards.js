import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    const { trackedPackage } = this.props;
    return <Card trackedPackage={trackedPackage} />;
  }
}

export default Cards;
