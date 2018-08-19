import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <form className="card  text-center">
        <div className="card-body">
          <input className="form-control form-control-lg" placeholder="Digite o código de rastreio"/>
        </div>
      </form>
    );
  }
}

export default Body;
