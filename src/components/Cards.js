import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    const { trackedPackage } = this.props;
    return (
      <div className="card" style={{ width: 450, marginLeft: 20, padding: 5 }}>
        <Card trackedPackage={trackedPackage} />
      </div>
    );
  }
}

export default Cards;
