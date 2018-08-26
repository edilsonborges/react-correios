import React, { Component } from "react";
import axios from "axios";
import Cards from "./Cards";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: "PS158730655BR",
      // codigo: 'PS153948797BR',
      // codigo: 'RY155347486CN',
      // codigo: "OF960682133BR",
      trackedPackage: "",
      showCard: false
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`http://correiosrestapi.edilsonborges.com.br/${this.state.codigo}`)
      .then(resp => {
        this.setState({ trackedPackage: resp, showCard: true });
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="card text-center"
      >
        <div className="card-body">
          <input
            name="codigo"
            className="form-control form-control-lg"
            placeholder="Digite o código de rastreio"
            onChange={this.handleChange.bind(this)}
            value={this.state.codigo}
          />
          <input
            type="submit"
            value="Buscar código"
            style={{ backgroundColor: "#306196" }}
            className="btn btn-primary btn-block"
          />
        </div>
        <Cards
          codigo={this.state.codigo}
          trackedPackage={this.state.trackedPackage}
        />
      </form>
    );
  }
}

export default Body;
