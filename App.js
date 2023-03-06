import React from "react";

function Adder({ a, b }) {
  const sum = a + b;
  return <h2>The sum of {a} and {b} is {sum}</h2>;
}

export default Adder;