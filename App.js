import React from "react";

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
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;
