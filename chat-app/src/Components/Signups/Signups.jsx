import React, { useState } from 'react'
import { signup } from '../../slices/userslice';
import {useDispatch,useSelector} from "react-redux"

export default function Signups() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const {users} = useSelector(state=>state.user)
  return (
    <div>
        <h1>sign up</h1>
        <div>
            {
               users.map((user)=>
                <h1>{user.email}</h1>
            )
            }
        </div>
        <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>dispatch(signup({email,password}))}>Signup</button>
        </div>
  )
}
