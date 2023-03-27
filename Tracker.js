import React, { Component } from "react";

export default class ClickTracker extends Component {
  state = { clickedButton: null };

  handleButtonClick = (e) => {
    this.setState((prev) => ({ clickedButton: e.target.innerText }));
  };

  render() {
    return (
      <div>
        <h1>
          {!!this.state.clickedButton && this.state.clickedButton + " Selected"}
        </h1>
        <button onClick={this.handleButtonClick}>1</button>
        <button onClick={this.handleButtonClick}>2</button>
        <button onClick={this.handleButtonClick}>3</button>
      </div>
    );
  }
}
