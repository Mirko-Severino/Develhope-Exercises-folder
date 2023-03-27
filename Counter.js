import React, { Component } from "react";
import CounterDisplay from "./Display";

export default class Counter extends Component {
  state = { counter: this.props.initialValue };

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + this.props.increment,
      }));
    }, this.props.interval);
  }
  render() {
    return <CounterDisplay counter={this.state.counter} />;
  }
}
