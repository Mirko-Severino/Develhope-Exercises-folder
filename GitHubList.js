import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function GithubUserList() {
  const [usernames, setUsernames] = useState(["Mirko-Severino"]);

  const handleAddUsername = (e) => {
    e.preventDefault();
    const username = e.target.username.value;

    setUsernames((prevUsernames) => [...prevUsernames, username]);
  };

  return (
    <div>
      <h2>Aggiungi un utente</h2>
      <form onSubmit={handleAddUsername}>
        <input name="username" placeholder="Inserisci username" />
        <button>+</button>
      </form>
      <ul>
        {usernames.map((username, index) => (
          <li key={index + username}>
            {" "}
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
