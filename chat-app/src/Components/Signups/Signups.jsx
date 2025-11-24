import React, { useState, useEffect } from 'react'
import { signup, fetchusers } from '../../slices/userslice';
import { useDispatch, useSelector } from "react-redux";

export default function Signups() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user);

  // 🔥 Load all users on page load
  useEffect(() => {
    dispatch(fetchusers());
  }, []);

  return (
    <div>
      <h1>Sign Up</h1>

      <div>
        {users.map((user, i) => (
          <h1 key={i}>{user.email}</h1>
        ))}
      </div>

      <input
        type="text"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => dispatch(signup({ email, password }))}>
        Signup
      </button>
    </div>
  )
}
