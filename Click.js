import React, { useEffect, useState } from "react";

export default function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 2);
  };

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  return (
    <div>
      <h1>Click Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
