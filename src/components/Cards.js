import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    return (
      <div className="card" style={{ width: 450, marginLeft: 20, padding: 5 }}>
        <Card />
      </div>
    );
  }
}

export default Cards;
