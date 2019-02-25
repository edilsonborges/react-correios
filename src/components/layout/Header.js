import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Rastreamento de Objetos</Navbar.Brand>
          <Nav className="flex-row ml-md-auto d-md-flex">
            <Nav.Link
              style={{ marginRight: 10 }}
              target="blank"
              href="https://twitter.com/edilsonfborges"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </Nav.Link>

            <Nav.Link
              target="blank"
              href="https://github.com/edilsonborges/react-correios"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
