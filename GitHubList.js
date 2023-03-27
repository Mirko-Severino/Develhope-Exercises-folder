import React, { useState } from "react";
import GithubUser from "./GitHub";

export default function GithubUserList() {
  const [usernames, setUsernames] = useState(["Mirko-Severino"]);

  const handleAddUsername = (e) => {
    e.preventDefault();
    const username = e.target.username.value;

    setUsernames((prevUsernames) => [...prevUsernames, username]);
  };

  return (
    <div>
      <h2>Aggiungi un utente alla lista</h2>
      <form onSubmit={handleAddUsername}>
        <input name="username" placeholder="Inserisci username" />
        <button>Aggiungi</button>
      </form>
      <div>
        {usernames.map((username) => (
          <GithubUser username={username} />
        ))}
      </div>
    </div>
  );
}
