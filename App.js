import React, { Component } from "react";
import Counter from "./Counter";

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter initialValue={0} increment={2} interval={2500} />
      </div>
    );
  }
}
