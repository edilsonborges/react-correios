import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTruck,
  faTruckLoading,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";
import { ProgressBar } from "react-bootstrap";
import uuid from "uuid";
// import { StaticMap } from "react-map-gl";
import "./layout/css/Card.css";
require("dotenv").config();
library.add(faTruck, faTruckLoading, faClipboard);
class Card extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }

  render() {
    const { trackedPackage } = this.props;
    const objeto = trackedPackage ? trackedPackage.data.objeto[0] : "";
    if (objeto) {
      objeto.evento.reverse();
    }
    return (
      <div>
        {objeto ? (
          <div className="container">
            <ul className="list-group" style={{ textAlign: "initial" }}>
              <li className="list-group-item">
                <FontAwesomeIcon icon="clipboard" /> Último status:{" "}
                {objeto.evento[objeto.evento.length - 1].descricao}
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon="truck-loading" /> Postado:{" "}
                {objeto.evento[0].data} às {objeto.evento[0].hora}
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon="truck" /> Atualizado:{" "}
                {objeto.evento[objeto.evento.length - 1].data} às{" "}
                {objeto.evento[objeto.evento.length - 1].hora}
              </li>
            </ul>
            <ProgressBar active now={50} />
            <ul className="list-group" style={{ textAlign: "initial" }}>
              {console.log(objeto.evento)}
              {objeto.evento.map(evento => {
                return (
                  <li
                    key={uuid()}
                    className="list-group-item"
                    style={{ textTransform: "" }}
                  >
                    {evento.descricao}
                    {evento.hasOwnProperty("destino")
                      ? ` para ${evento.destino[0].local} (${
                          evento.destino[0].cidade
                        }/${evento.destino[0].uf})`
                      : ""}
                    {` às ${evento.hora} em ${evento.data}`}
                  </li>
                );
              })}
            </ul>
            {/* <StaticMap
              width={400}
              height={400}
              mapboxApiAccessToken={
                "pk.eyJ1IjoiZWRpbHNvbmJvcmdlcyIsImEiOiJjamxhOWtzeWIweTBiM3huNjFhZG5zOGk3In0.5YgkR8xJUmDG1Wp7AtOX9w"
              }
              latitude={objeto.evento[0].unidade.endereco.latitude}
              longitude={objeto.evento[0].unidade.endereco.longitude}
              zoom={3}
            /> */}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Card;
