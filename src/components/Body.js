import React, { Component } from "react";

class Body extends Component {
  handleSubmit = (e) => {
    console.log(e);
    // this.setState({ codigo: e.codigo });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="card  text-center">
        <div className="card-body">
          <input className="form-control form-control-lg" placeholder="Digite o código de rastreio" />
        </div>
      </form>
    );
  }
}

export default Body;
