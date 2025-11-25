import React, { useEffect, useState } from "react";
import { signin, fetchusers,signinwithgoogles,signup } from "../../slices/userslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignIns.css";

export default function SignIns() {
  const navigate=useNavigate();

  const dispatch = useDispatch(); 
      useEffect(()=>{
    dispatch(fetchusers());

  },[])
// ✅ Move this ABOVE useEffect
  // const { users } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



return (
  <div className="signin-container">
    <h2 className="text-white fw-bolder">Sign In</h2>
    <input
      type="text"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={() => {
      dispatch(signin({ email, password }));
      navigate("/home");
    }}>
      Sign In
    </button>

    <button 
      className="google-btn"
      onClick={() => dispatch(signinwithgoogles({ email, password }))}
    >
      Sign In with Google
    </button>

    <button 
      className="google-btn"
      onClick={() => {
        dispatch(signup({ email, password }));
        navigate("/signup");
      }}
    >
      Sign Up
    </button>
  </div>
);

}
