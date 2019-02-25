import React, { Component } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Container, Card } from "react-bootstrap";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: "",
      // codigo: "PT158444782BR",
      // codigo: "OG042063528BR",
      // codigo: "PS158730655BR",
      // codigo: "PS153948797BR",
      // codigo: 'RY155347486CN',
      // codigo: "OF960682133BR",
      // codigo: "RB591661305SG", // origem: Singapura
      // codigo: "RB569174217SG", // origem: Malásia
      // codigo: "RP003232834CN", // origem: Hong Kong
      trackedPackage: "",
      showCard: false
    };
  }
  handleSubmit(e) {
    return this.loadComponent(e);
  }

  loadComponent(e = null, codigo = null) {
    if (e) {
      e.preventDefault();
    }
    if (this.state.codigo) {
      codigo = this.state.codigo;
    }
    axios
      .get(`http://correiosrestapi.edilsonborges.com.br/${codigo}`)
      .then(resp => {
        this.setState({ trackedPackage: resp, showCard: true });
      })
      .catch(err => console.log(err));
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value, trackedPackage: "" });
  }
  componentDidMount() {
    if (this.props.match.params.object) {
      this.setState({ codigo: this.props.match.params.object });
      this.loadComponent(null, this.props.match.params.object);
    }
  }

  render() {
    return (
      <Container>
        <Card style={{ border: 0 }}>
          <Card.Body>
            <form
              style={{ border: 0 }}
              onSubmit={this.handleSubmit.bind(this)}
              className="card text-center"
            >
              <div className="input-group mb-3">
                <input
                  name="codigo"
                  className="form-control form-control-lg"
                  placeholder="Digite o código de rastreio"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.codigo}
                />
                <div className="input-group-append">
                  <input
                    type="submit"
                    value="Buscar"
                    style={{ backgroundColor: "#306196" }}
                    className="btn btn-primary btn-block"
                  />
                </div>
              </div>
              <Cards
                codigo={this.state.codigo}
                trackedPackage={this.state.trackedPackage}
              />
            </form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Body;
