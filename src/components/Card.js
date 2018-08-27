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
import { Marker, StaticMap } from "react-map-gl";
import "./layout/css/Card.css";

library.add(faTruck, faTruckLoading, faClipboard);

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
      width: 400,
      height: 400,
      zoom: 8,
      mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_TOKEN
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
          <div>
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
            </div>
            <StaticMap
              {...this.state}
              latitude={Number(objeto.evento[0].unidade.endereco.latitude)}
              longitude={Number(objeto.evento[0].unidade.endereco.longitude)}
              zoom={3}
            >
              <Marker
                latitude={Number(objeto.evento[0].unidade.endereco.latitude)}
                longitude={Number(objeto.evento[0].unidade.endereco.longitude)}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <div>Origem</div>
              </Marker>
              <Marker
                latitude={Number(
                  objeto.evento[objeto.evento.length - 1].unidade.endereco
                    .latitude
                )}
                longitude={Number(
                  objeto.evento[objeto.evento.length - 1].unidade.endereco
                    .longitude
                )}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <div>Atual</div>
              </Marker>
            </StaticMap>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Card;
