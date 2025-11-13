import React, { useEffect, useState } from "react";
import { signin, fetchusers,signinwithgoogles } from "../../slices/userslice";
import { useDispatch, useSelector } from "react-redux";

export default function SignIns() {

  const dispatch = useDispatch(); 
      useEffect(()=>{
    dispatch(fetchusers());
  },[])
// ✅ Move this ABOVE useEffect
  const { users } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
      <div>
        {users.map((user) => (
          <h2 key={user.email}>{user.email}</h2>
        ))}
      </div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password" // ✅ better security
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => {
        dispatch(signin({ email, password }))
        dispatch(fetchusers());
      }}>
        Sign In
      </button>

      <button onClick={()=>{
        dispatch(signinwithgoogles({email,password}))

      }}>sign in with google</button>
    </div>
  );
}
