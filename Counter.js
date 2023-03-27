import React, { useEffect, useState } from "react";
import CounterDisplay from "./Display";

export default function Counter({
  initialValue = 0,
  increment = 2,
  interval = 1500,
}) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + increment);
    }, interval);
    return () => {
      return clearInterval(intervalId);
    };
  }, [increment, interval]);

  return <CounterDisplay counter={count} />;
}
