import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Mirko" />} />
    </Routes>
  );
}
