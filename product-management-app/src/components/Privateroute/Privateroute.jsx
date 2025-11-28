import React from "react";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth"); // "true" or null
  return isAuth === "true" ? children : <Navigate to="/login" replace />;
};

export default Privateroute;
