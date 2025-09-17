import React from 'react'
import "./Registration.css";
import {useNavigate} from "react-router-dom"



export default function Registration() {
    const navigate = useNavigate();

  return (
    <div className=' overflow-hidden'>
         <h1 className='text-center mt-2'>Sign In</h1>
        <form>
       
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" onClick={()=>{
    navigate("/nav")
  }} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
