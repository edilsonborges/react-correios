import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTruck,
  faTruckLoading,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";
import { ProgressBar, Card as CardBootstrap } from "react-bootstrap";
import uuid from "uuid";
import { Marker, StaticMap } from "react-map-gl";
import "./layout/css/Card.css";

library.add(faTruck, faTruckLoading, faClipboard);

const getCurrentProgress = o => {
  let objProgress = {
    progress: 0
  };
  if (o.evento[o.evento.length - 1].descricao === "Objeto postado") {
    objProgress = {
      progress: 10
    };
  }
  if (
    o.evento[o.evento.length - 1].descricao ===
    "Objeto entregue ao destinatário"
  ) {
    objProgress = {
      progress: 100
    };
  } else {
    let progress = o.evento.length * 10;
    if (progress >= 100) {
      objProgress = { progress: 90 };
    } else {
      objProgress = { progress: progress };
    }
  }
  return objProgress;
};

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
      width: 470,
      height: 400,
      zoom: 3.8,
      mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_TOKEN
    };
  }
  render() {
    const { trackedPackage } = this.props;
    const objeto =
      trackedPackage &&
      trackedPackage.data.objeto[0].categoria !==
        "ERRO: Objeto não encontrado na base de dados dos Correios."
        ? trackedPackage.data.objeto[0]
        : "";
    if (objeto) {
      objeto.evento.reverse();
    }
    return (
      <div>
        {objeto ? (
          <div>
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
            <ProgressBar
              striped
              animated
              now={getCurrentProgress(objeto).progress}
            />
            <ul className="list-group" style={{ textAlign: "initial" }}>
              {objeto.evento.map((evento, i) => {
                return (
                  <li
                    key={uuid()}
                    className="list-group-item"
                    style={{ textTransform: "" }}
                  >
                    #{i}: {evento.descricao}
                    {evento.hasOwnProperty("destino")
                      ? ` para ${evento.destino[0].local} (${
                          evento.destino[0].cidade
                        }/${evento.destino[0].uf})`
                      : ""}
                    {` às ${evento.hora} em ${evento.data}`}
                  </li>
                );
              })}
              <CardBootstrap>
                <StaticMap
                  {...this.state}
                  latitude={Number(objeto.evento[0].unidade.endereco.latitude)}
                  longitude={Number(
                    objeto.evento[0].unidade.endereco.longitude
                  )}
                >
                  <Marker
                    latitude={Number(
                      objeto.evento[0].unidade.endereco.latitude
                    )}
                    longitude={Number(
                      objeto.evento[0].unidade.endereco.longitude
                    )}
                    offsetLeft={-20}
                    offsetTop={-10}
                  >
                    <div>
                      <span role="img" aria-label="Origem">
                        📍
                      </span>
                    </div>
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
                    <div>
                      <span role="img" aria-label="Atualmente">
                        📦
                      </span>
                    </div>
                  </Marker>
                </StaticMap>
              </CardBootstrap>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Card;
