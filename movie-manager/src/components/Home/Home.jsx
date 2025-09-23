import React, { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = sessionStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleSetUser = () => {
    if (!username) {
      alert("Enter a username first!");
      return;
    }
    sessionStorage.setItem("username", username);
    alert("Username saved in session storage!");
  };

  return (
    <div className="card p-3">
      <h4>👤 Current User</h4>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSetUser}>
        Save Username
      </button>
      {username && <p className="mt-3">Welcome, <b>{username}</b> 🎉</p>}
    </div>
  );
}

