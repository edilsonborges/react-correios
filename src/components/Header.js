import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-black">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">Rastreamento de Objetos</a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="bd-tw-button button" target="_blank" href="https://twitter.com/edilsonfborges">
                      <span>Meu twitter</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-primary" target="_blank" href="https://github.com/edilsonborges/react-correios">
                      <span>GitHub</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;