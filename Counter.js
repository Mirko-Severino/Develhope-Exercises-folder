import React from "react";
import useCounter from "./hooks/useCounter";

export default function Counter({ initialValue }) {
  const { count, onIncrement, onDecrement, onReset } = useCounter(initialValue);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}
