import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth,provider } from "../../firebase";

import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleEmailLogin = async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("isAuth", "true");  // ✅ Important
    navigate("/products"); // Navigate to products page
  } catch (err) {
    setError("Invalid Email or Password!");
  }
};

const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    localStorage.setItem("isAuth", "true");  // ✅ Important
    navigate("/products"); // Navigate to products page
  } catch (err) {
    setError("Google Sign-In Failed!");
  }
};

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-3 fw-bold">Login</h3>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleEmailLogin}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <hr />

        <button
          className="btn btn-danger w-100 mt-2"
          onClick={handleGoogleLogin}
        >
          Sign in with Google 🚀
        </button>
      </div>
    </div>
  );
}
