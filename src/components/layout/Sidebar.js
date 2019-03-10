import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { arrCodes } = this.props;
    return (
      <div>
        {arrCodes && arrCodes.length > 1 ? (
          <div
            style={{
              width: "200px",
              height: "100vh",
              border: "solid 1px #dfdfdf"
            }}
          >
            <ul className="list-group">
              {arrCodes.map((codigo, i) => {
                return (
                  <li
                    style={{ cursor: "pointer" }}
                    key={i}
                    onClick={() => this.props.history.push(`/${codigo}`)}
                    className="list-group-item"
                  >
                    {codigo}
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

export default withRouter(Sidebar);
