import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchusers } from '../../slices/userslice';

export default function Userhomepage() {
  const { users, isLoading } = useSelector(state => state.user);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchusers())
  },[])

  return (
    isLoading ? (
      <div>
        <p>User information fetching...</p>
      </div>
    ) : (
      <ol className="list-group list-group-numbered">
        {users.map((user, index) => (
           <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{user.email}</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
        ))}
      </ol>
    )
  );
}
