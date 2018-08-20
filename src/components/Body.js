import React, { Component } from "react";

class Body extends Component {
    state = {
      codigo: 'PS158730655BR',
      // codigo: 'PS153948797BR'
    }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.codigo);
    fetch('https://correios.postmon.com.br/rastreamento/?objeto='+this.state.codigo)
      .then((v) => (console.log(v)));
  }
  handleChange(e) {
    e.preventDefault();
    // console.log(e.target.name+': '+e.target.value);
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