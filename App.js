import React, { Component } from "react";
import Counter from "./Counter";
import Hello from "./Ciao";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <hr />
        <Welcome name={<strong>Mirko</strong>} age={29} />
        <hr />
        <Welcome name={<strong>Alessandro</strong>} age={10} />
        <hr />
        <Welcome name={<strong>Alessio</strong>} age={70} />
        <hr />
        <Welcome name={<strong>Simone</strong>} age={33} />
        <hr />
        <Welcome />
        <hr />
        <Counter initialValue={0} increment={2} interval={2000} />
      </div>
    );
  }
}
