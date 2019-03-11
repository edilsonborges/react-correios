import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "BUSCAR_CODIGO":
      const { trackedPackage, showCard, showSpinner } = action.payload;
      return {
        ...state,
        trackedPackage,
        showCard,
        showSpinner
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    codigo: "",
    trackedPackage: "",
    showCard: false,
    showSpinner: false,
    dispatch: action => {
      this.setState(state => {
        console.log("estado anterior", state);
        return reducer(state, action);
      });
      console.log("estado após", this.state);
    }
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
