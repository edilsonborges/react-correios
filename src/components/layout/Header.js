import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-light">
        <div className="container">
          <a className="btn btn-secondary" href="/">
            Rastreamento de Objetos
          </a>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/edilsonfborges"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/edilsonborges/react-correios"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
