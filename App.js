import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GitHubList";
import Welcome from "./Welcome";
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="/users">Users</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Mirko" />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} increment={1} interval={1000} />}
        />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}
