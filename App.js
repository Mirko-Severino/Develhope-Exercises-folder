import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="/users/Mirko-Severino">Users: Mirko-Severino</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Mirko" />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} increment={1} interval={1000} />}
        />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}
