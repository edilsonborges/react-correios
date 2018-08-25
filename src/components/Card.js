import React, { Component } from "react";

class Card extends Component {
  render() {
    const { card } = this.props.value;
    console.log(card);
    return (
      <div>
        <div className="container">
          <ul className="list-group">
            <li className="list-group-item">{card ? card.statusText : ""}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
