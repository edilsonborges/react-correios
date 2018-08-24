import React, { Component } from "react";
import axios from 'axios';

class Body extends Component {
  state = {
    codigo: 'PS158730655BR',
    // codigo: 'PS153948797BR'
    // codigo: 'RY155347486CN'
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log();
    const request = axios.get(`http://api.edilsonborges.com.br:5000/track/${this.state.codigo}/json`)
            .then(resp => console.log(resp))
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
