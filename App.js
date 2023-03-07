import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>
          Welcome, <strong>{name}</strong>!
        </p>
        {age > 18 ? (
          <p>
            Your age is <Age age={age} />.
          </p>
        ) : null}
      </div>
    );
  }
}

export default Welcome;







