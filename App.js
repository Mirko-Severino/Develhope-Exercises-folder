import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";

export default function App() {
  return (
    <Routes>
      <Route
        path="/counter"
        element={<Counter initialValue={0} increment={1} interval={1000} />}
      />
    </Routes>
  );
}
