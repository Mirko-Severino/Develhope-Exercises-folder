import React, { Component } from "react";

export default class Age extends Component {
  render() {
    return (
      <p>
        {(this.props.age > 18 && "Your age is " + this.props.age) ||
          "Sei troppo giovane"}
      </p>
    );
  }
}
