import React from "react";
import ReactDOM from "react-dom";
import Greeting from './App';

function App() {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

