import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle, faHistory } from "@fortawesome/free-solid-svg-icons";
import { Consumer } from "../../context";
library.add(faTimesCircle, faHistory);

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCodigos: [
        "LB182379894SE",
        "PT158444782BR",
        "OG042063528BR",
        "PS158730655BR",
        "PS153948797BR",
        "RY155347486CN",
        "OF960682133BR",
        "RB591661305SG", // origem: Singapura
        "RB569174217SG", // origem: Malásia
        "RP003232834CN" // origem: Hong Kong
      ]
    };
  }
  render() {
    const { arrCodigos } = this.state;
    return (
      <Consumer>
        {value => {
          return (
            <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                {arrCodigos && arrCodigos.length > 1 ? (
                  <div>
                    <ul className="nav flex-column">
                      <li
                        className="nav-item nav-link "
                        style={{ fontSize: "1rem" }}
                      >
                        <FontAwesomeIcon icon="history" />
                        <strong> Histórico</strong>
                      </li>
                      {arrCodigos.map((codigo, i) => {
                        return (
                          <li key={i} className="nav-item nav-link border">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                value.dispatch({
                                  type: "BUSCAR_CODIGO",
                                  payload: codigo
                                })
                              }
                            >
                              {codigo}
                            </span>

                            <span
                              style={{ float: "right", cursor: "pointer" }}
                              onClick={() => {
                                this.setState({
                                  arrCodigos: arrCodigos.filter(
                                    cod => cod !== codigo
                                  )
                                });
                              }}
                            >
                              <FontAwesomeIcon icon="times-circle" />
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Nav>
          );
        }}
      </Consumer>
    );
  }
}

export default withRouter(Sidebar);
