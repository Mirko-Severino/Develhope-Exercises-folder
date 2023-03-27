import React, { Component } from "react";
import Sum from "./Sum";

export default class App extends Component {
  render() {
    return (
      <div>
        <Sum numbers={[1, 2, 3]} />
      </div>
    );
  }
}
