import React from "react";
import useGithubUser from "./hooks/useGitHub";

export default function GithubUser({ username }) {
  const { user, error, loading } = useGithubUser(username);
  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      {user && !error && (
        <div>
          <img src={user.avatar_url} alt={user.name} />
          <div>
            <h2 className="text-base font-bold">{user.name}</h2>
            <div className="text-xs">{user.location}</div>
          </div>
        </div>
      )}
    </div>
  );
}
