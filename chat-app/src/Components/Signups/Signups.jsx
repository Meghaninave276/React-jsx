import React, { useState, useEffect } from 'react'
import { signup, fetchusers } from '../../slices/userslice';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import "./Signups.css";

export default function Signups() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate=useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user);

  // 🔥 Load all users on page load
  useEffect(() => {
    dispatch(fetchusers());
  }, []);

return (
  <div className="signup-container">
    <h1>Sign Up</h1>

    {/* {users.map((user, i) => (
      <p key={i} style={{ color: "white" }}>{user.email}</p>
    ))} */}

    <input
      type="text"
      className="signup-input"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      className="signup-input"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      className="signup-btn"
      onClick={() => {
        dispatch(signup({ email, password }))
        navigate("/");
      }}
    >
      Sign Up
    </button>
  </div>
);

}
