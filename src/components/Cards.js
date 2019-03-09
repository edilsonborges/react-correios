import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    const { trackedPackage, codigo, showCard, showSpinner } = this.props;
    return (
      <Card
        trackedPackage={trackedPackage}
        codigo={codigo}
        showCard={showCard}
        showSpinner={showSpinner}
      />
    );
  }
}

export default Cards;
