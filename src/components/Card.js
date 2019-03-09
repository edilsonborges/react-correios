import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTruck,
  faTruckLoading,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";
import {
  ProgressBar,
  Card as CardBS,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import uuid from "uuid";
import { Marker, StaticMap } from "react-map-gl";
import Spinner from "./layout/Spinner";
library.add(faTruck, faTruckLoading, faClipboard);

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
      width: "100%",
      height: 400,
      zoom: 3.8,
      mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_TOKEN
    };
  }
  render() {
    const { trackedPackage, showSpinner } = this.props;
    const objeto = handlePackage(trackedPackage);
    return (
      <div>
        {showSpinner ? <Spinner /> : ""}
        {objeto ? (
          <div>
            <ListGroup style={{ textAlign: "initial" }}>
              <ListGroupItem>
                <FontAwesomeIcon icon="clipboard" /> Último status:{" "}
                {objeto.evento[objeto.evento.length - 1].descricao}
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon="truck-loading" /> Postado:{" "}
                {objeto.evento[0].data} às {objeto.evento[0].hora}
              </ListGroupItem>
              {objeto.evento.length > 1 ? (
                <ListGroupItem>
                  <FontAwesomeIcon icon="truck" /> Atualizado:{" "}
                  {objeto.evento[objeto.evento.length - 1].data} às{" "}
                  {objeto.evento[objeto.evento.length - 1].hora}
                </ListGroupItem>
              ) : (
                ""
              )}
            </ListGroup>
            <ProgressBar
              striped
              animated
              now={getCurrentProgress(objeto).progress}
            />
            <ListGroup style={{ textAlign: "initial" }}>
              {objeto.evento.map((evento, i) => {
                return (
                  <li
                    key={uuid()}
                    className="list-group-item"
                    style={{ textTransform: "" }}
                  >
                    #{i + 1}: {evento.descricao}
                    {evento.hasOwnProperty("destino")
                      ? ` para ${evento.destino[0].local} (${
                          evento.destino[0].cidade
                        }/${evento.destino[0].uf})`
                      : ""}
                    {` às ${evento.hora} em ${evento.data}`}
                  </li>
                );
              })}
              <CardBS>
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
              </CardBS>
            </ListGroup>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const handlePackage = trackedPackage => {
  const objeto =
    trackedPackage &&
    trackedPackage.data.objeto[0].categoria !==
      "ERRO: Objeto não encontrado na base de dados dos Correios."
      ? trackedPackage.data.objeto[0]
      : "";
  if (objeto) {
    objeto.evento.reverse();
  }
  return objeto;
};

const getCurrentProgress = obj => {
  let objProgress = {
    progress: 0
  };
  if (obj.evento[obj.evento.length - 1].descricao === "Objeto postado") {
    objProgress = {
      progress: 10
    };
  }
  if (
    obj.evento[obj.evento.length - 1].descricao ===
    "Objeto entregue ao destinatário"
  ) {
    objProgress = {
      progress: 100
    };
  } else {
    let progress = obj.evento.length * 10;
    if (progress >= 100) {
      objProgress = { progress: 90 };
    } else {
      objProgress = { progress: progress };
    }
  }
  return objProgress;
};

export default Card;
