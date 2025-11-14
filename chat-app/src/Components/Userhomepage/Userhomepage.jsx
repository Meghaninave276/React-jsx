import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchusers, getuser } from '../../slices/userslice';
import { useNavigate } from 'react-router-dom';

export default function Userhomepage() {
  const navigate=useNavigate()
  let { users, isLoading,currentuser } = useSelector(state => state.user);
  const dispatch=useDispatch();
  useEffect(()=>{
   
dispatch(getuser());
    dispatch(fetchusers());
   
  },[])

  return (
  
   <div>
    <h2>user-{currentuser.email}</h2>
       <ol className="list-group list-group-numbered">
        {users.map((user, index) => (
           <li onClick={()=>navigate("/chat")} class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{user.email}</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
        ))}
      </ol>
   </div>
    )
  
}
