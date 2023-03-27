import React, { Component } from "react";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome name="Mirko" age={19} />
      </div>
    );
  }
}
