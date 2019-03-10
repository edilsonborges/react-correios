import React, { Component } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Card, Form, Row } from "react-bootstrap";
import Sidebar from "./layout/Sidebar";
import { Consumer } from "../context";

class Body extends Component {
  state = {
    codigo: "",
    trackedPackage: "",
    showCard: false,
    showSpinner: false
  };

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

  componentDidMount() {
    if (this.props.match.params.object) {
      this.setState({ codigo: this.props.match.params.object });
      this.loadComponent(null, this.props.match.params.object);
    }
  }

  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return (
            <Row>
              <Sidebar />
              <Card
                className="col-md-9 ml-sm-auto col-lg-10 px-4 pt-5"
                style={{ border: 0 }}
              >
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
            </Row>
          );
        }}
      </Consumer>
    );
  }
}

export default Body;
