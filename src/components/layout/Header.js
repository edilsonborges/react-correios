import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-light">
        <a className="btn btn-secondary" href="/">
          Rastreamento de Objetos
        </a>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a className="btn btn-secondary" target="_blank" href="https://twitter.com/edilsonfborges" >
                <i className="fab fa-twitter" /> Twitter 
              </a>
            </li>
            <li class="nav-item">
              <a className="btn btn-secondary" target="_blank" href="https://github.com/edilsonborges/react-correios" >
                <i className="fab fa-github" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
