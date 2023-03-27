import React from "react";
import Login from "./Login";
import GithubUser from "./GitHub";

export default function App() {
  return (
    <div>
      <Login />
      <GithubUser username="Mirko-Severino" />
    </div>
  );
}
