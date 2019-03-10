import React, { Component } from "react";
import { Nav, Navbar as NavbarBS } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <NavbarBS.Brand
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="/"
          >
            Rastreamento de Objetos
          </NavbarBS.Brand>
          <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex mr-2">
            <li className="nav-item">
              <a
                className="nav-link p-2"
                target="blank"
                href="https://twitter.com/edilsonfborges"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-2"
                target="blank"
                href="https://github.com/edilsonborges/react-correios"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
          </ul>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
