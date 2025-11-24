import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers, getuser } from "../../slices/userslice";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Logged in: {currentuser.email}</h2>

      <ol className="list-group list-group-numbered">

        {/* Show ONLY other users */}
        {otherUsers.map((user, index) => (
          <li
            key={index}
            onClick={() => navigate("/chat", { state: user })}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{user.email}</div>
            </div>
          </li>
        ))}

      </ol>
    </div>
  );
}
