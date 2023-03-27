import React, { Component } from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={<strong>Mirko</strong>} age={29} />
        <Welcome />
      </div>
    );
  }
}
