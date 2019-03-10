import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "BUSCAR_CODIGO":
      console.log("buscando código");
      break;
    default:
      break;
  }
};

export class Provider extends Component {
  state = {
    codigo: "",
    trackedPackage: "",
    showCard: false,
    showSpinner: false,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
