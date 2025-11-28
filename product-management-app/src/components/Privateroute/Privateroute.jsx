import React from "react";
import { Navigate } from "react-router-dom";

export default function Privateroute({ children }) {
  const isAuth = localStorage.getItem("isAuth"); // ✔ Check if logged in

  return isAuth ? children : <Navigate to="/login" replace />;
}
