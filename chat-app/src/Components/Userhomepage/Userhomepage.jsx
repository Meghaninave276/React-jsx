import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers, getuser } from "../../slices/userslice";
import { useNavigate } from "react-router-dom";
import "./Userhomepage.css";

export default function Userhomepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users, currentuser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getuser());
    dispatch(fetchusers());
  }, []);

  if (!currentuser?.email) {
    return <h2>Loading...</h2>;
  }

  // 🟢 FILTER: remove the logged-in user from the list
  const otherUsers = users.filter(u => u.email !== currentuser.email);
return (
  <div className="user-homepage">
  <h4 className="logged-in-text">Logged in: {currentuser.email}</h4>

<ol className="list-group mt-3">
  {otherUsers.map((user, index) => (
    <li
      key={index}
      className="list-group-item glass-item"
      onClick={() => navigate("/chat", { state: user })}
    >
      <div className="user-avatar">
        {user.email[0].toUpperCase()}
        <span className={`status-dot ${user.online ? "online" : "offline"}`}></span>
      </div>

      <div className="fw-bold">{user.email}</div>
    </li>
  ))}
</ol>

  </div>
);

}
