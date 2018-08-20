import React, { Component } from "react";

class Body extends Component {
  handleSubmit = (e) => {
    this.setState({ codigo: e.codigo });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="card  text-center">
        <div className="card-body">
          <input className="form-control form-control-lg" placeholder="Digite o código de rastreio" />
          <input class="btn btn-primary" type="button">Enviar</input>
        </div>
      </form>
    );
  }
}

export default Body;
