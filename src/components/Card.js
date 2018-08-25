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
import moment from "moment";
import "moment/locale/pt-br";

library.add(faTruck, faTruckLoading, faClipboard);

class Card extends Component {
  state = {
    isDelivered: "",
    postedAt: "",
    updatedAt: "",
    track: {
      status: "",
      observation: "",
      trackedAt: "",
      unit: ""
    },
    showDetails: false
  };
  render() {
    const { trackedPackage } = this.props;
    const dataTrackedPackage = trackedPackage ? trackedPackage.data.data : "";
    const { isDelivered, postedAt, updatedAt } = dataTrackedPackage;
    return (
      <div>
        {dataTrackedPackage ? (
          <div className="container">
            <ul className="list-group" style={{ textAlign: "initial" }}>
              <li className="list-group-item">
                <FontAwesomeIcon icon="clipboard" /> Status:{" "}
                {isDelivered ? "Entregue" : "Ainda não entregue"}
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon="truck-loading" /> Postado:{" "}
                {moment(postedAt).format("LLLL")}
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon="truck" /> Atualizado:{" "}
                {moment(updatedAt).format("LLLL")}
              </li>
            </ul>
            <ProgressBar active now={50} />
            <ul className="list-group" style={{ textAlign: "initial" }}>
              <div className="progress" style={{ height: "10px" }} />
              {console.log(dataTrackedPackage)}
              {dataTrackedPackage.track.map(value => {
                return (
                  <li
                    key={uuid()}
                    className="list-group-item"
                    style={{ textTransform: "uppercase" }}
                  >
                    {value.status}
                    {" | "}
                    {moment(value.trackedAt).format("LL")}
                    {" | "}
                    {value.observation ? value.observation : "-"}
                  </li>
                );
              })}
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
