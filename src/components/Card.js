import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
library.add(faTruck);

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
    return (
      <div>
        <div className="container">
          <FontAwesomeIcon icon="truck" />
          <div className="progress" style={{ height: "10px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          {dataTrackedPackage ? (
            <ul className="list-group">
              {dataTrackedPackage.track.map(value => {
                return (
                  <li className="list-group-item">
                    {value.observation ? value.observation : "-"}
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Card;
