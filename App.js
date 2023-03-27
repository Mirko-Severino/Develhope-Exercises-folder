import React, { Component } from "react";
import ClickCounter from "./Click";

export default class App extends Component {
  render() {
    return (
      <div>
        <ClickCounter
          onCounterChange={(count) => {
            console.log("The counter is: " + count);
          }}
        />
      </div>
    );
  }
}
