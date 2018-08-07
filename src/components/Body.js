import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="box-body">
          <div className="box">
            <input className="input" label="teste"/>
            <button className="button">Adicionar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;