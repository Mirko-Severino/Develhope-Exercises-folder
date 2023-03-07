import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    if (age > 18 && age < 65) {
      return (
        <div>
          <p>Welcome, <strong>{name}</strong>!</p>
          <p>Your age is <Age age={age} />.</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Welcome, <strong>{name}</strong>!</p>
          <p>You are old or too joung.</p>
        </div>
      );
    }
  }
}

export default Welcome;







