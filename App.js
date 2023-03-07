import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    let ageComponent = null;

    if (age) {
      ageComponent = <Age age={age} />;
    }

    return (
      <div>
        <p>Welcome, <strong>{name}</strong>!</p>
        {ageComponent && <p>Your age is {ageComponent}.</p>}
      </div>
    );
  }
}

export default Welcome;








