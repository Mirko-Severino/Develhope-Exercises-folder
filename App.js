import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    const { age } = this.props;

    return (
      <div>
        {age >= 18 && <Age age={age} />}
      </div>
    );
  }
}

export default Welcome;
