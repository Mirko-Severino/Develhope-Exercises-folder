import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export default function App() {
  return (
    <Routes>
      <Route path="/users/:username" element={<ShowGithubUser />} />
    </Routes>
  );
}
