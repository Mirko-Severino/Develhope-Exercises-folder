import React, { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 2);
  };

  return (
    <div>
      <h1>Click Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
