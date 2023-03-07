import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialValue };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + this.props.incrementAmount }));
    }, this.props.incrementInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

export default Counter;
