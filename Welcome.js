import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name || "Sconosciuto"}!</p>
        <p>Your age is {this.props.age || "unknown"}</p>
      </>
    );
  }
}
