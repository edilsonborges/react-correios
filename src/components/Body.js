import React, { Component } from "react";

class Body extends Component {
  state = {
    codigo: 'PS158730655BR',
    // codigo: 'PS153948797BR'
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.codigo);
    let result = fetch('http://127.0.0.1:8181/track/' + this.state.codigo + '/json', { method: "GET" })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      }).catch(function (err) {
        console.log(err)
      });
      console.log(result);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="card text-center">
        <div className="card-body">
          <input name="codigo" className="form-control form-control-lg"
            placeholder="Digite o código de rastreio"
            onChange={this.handleChange.bind(this)} value={this.state.codigo} />
        </div>
      </form>
    );
  }
}

export default Body;