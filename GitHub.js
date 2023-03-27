import React from "react";
import useGithubUser from "./hooks/useGitHub";

export default function GithubUser({ username }) {
  const { user, error, loading, getGithubUser } = useGithubUser(username);
  return (
    <div>
      <div>
        <button
          onClick={() => getGithubUser("Mirko-Severino")}
          className="border rounded-md p-1 m-1"
        >
          Mirko
        </button>
        <button
          onClick={() => getGithubUser("georgev-97")}
          className="border rounded-md p-1 m-1"
        >
          George
        </button>
        <button
          onClick={() => getGithubUser("AndreaPossidente")}
          className="border rounded-md p-1 m-1"
        >
          Andrea
        </button>
      </div>
      {loading && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      {user && !error && (
        <div>
          <img src={user.avatar_url} alt={user.name} />
          <div>
            <h2 className="text-base font-bold">{user.name}</h2>
            <div className="text-xs">{user.location}</div>
            <p className="text-sm pt-1">{user.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}
