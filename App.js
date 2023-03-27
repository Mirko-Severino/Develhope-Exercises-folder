import React, { Component } from "react";
import Sum from "./Sum";

export default class App extends Component {
  render() {
    return (
      <div>
        <Sum numbers={[10, 20, 100]} />
      </div>
    );
  }
}
