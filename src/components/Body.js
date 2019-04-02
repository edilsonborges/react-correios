import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Cards from "./Cards";
import { Container, Card, Form } from "react-bootstrap";

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
      showCard: false,
      showSpinner: false
    };
  }
  handleSubmit(e) {
    return this.loadComponent(e);
  }

  loadComponent(e = null, codigo = null) {
    this.setState({ trackedPackage: "", showCard: false, showSpinner: true });
    if (e) {
      e.preventDefault();
    }
    if (this.state.codigo) {
      codigo = this.state.codigo;
    }
    axios
      .get(`http://correiosrestapi.edilsonborges.com.br/${codigo}`)
      .then(resp => {
        localStorage.setItem("codigo", codigo);
        this.setState({
          trackedPackage: resp,
          showCard: true,
          showSpinner: false
        });
      })
      .catch(err => console.log(err));
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value, trackedPackage: "" });
  }
  handleClear() {
    localStorage.clear();
    this.setState({
      trackedPackage: "",
      showCard: false,
      showSpinner: false,
      codigo: ""
    });
    this.props.history.push("/");
  }
  componentDidMount() {
    console.log(this.props.match.params.object);
    if (this.props.match.params.object || localStorage.getItem("codigo")) {
      this.setState({
        codigo: this.props.match.params.object || localStorage.getItem("codigo")
      });
      this.loadComponent(
        null,
        this.props.match.params.object || localStorage.getItem("codigo")
      );
    }
  }

  render() {
    return (
      <Container>
        <Card style={{ border: 0 }}>
          <Card.Body>
            <Form
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
                    type="button"
                    value="Limpar"
                    onClick={this.handleClear.bind(this)}
                    style={{ backgroundColor: "#c7c7c7" }}
                    className="btn btn-block"
                  />
                </div>
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
                showCard={this.state.showCard}
                showSpinner={this.state.showSpinner}
              />
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default withRouter(Body);
