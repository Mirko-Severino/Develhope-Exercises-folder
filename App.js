import React from "react";

class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return <p>Welcome, {name}!</p>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <Welcome name="Mirko" />
      </div>
    );
  }
}

export default App;




