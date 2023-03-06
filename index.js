import React from "react";
import ReactDOM from "react-dom";
import Adder from "./App";

function App() {
  return (
    <div>
      <Adder a={3} b={5} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

