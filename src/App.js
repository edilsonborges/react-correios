import React, { Component } from "react";
import Header from "./components/layout/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMapGL, { Marker } from "react-map-gl";

class App extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
      mapboxApiAccessToken: process.env.MAPBOX_TOKEN
    }
  };
  render() {
    console.log(process.env);
    return (
      <div>
        <Header />
        <Body />
        {/* <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        /> */}
        <ReactMapGL
          {...this.state.viewport}
          latitude={37.78}
          longitude={-122.41}
          zoom={8}
        >
          <Marker
            latitude={37.78}
            longitude={-122.41}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div>Origem</div>
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}
export default App;
