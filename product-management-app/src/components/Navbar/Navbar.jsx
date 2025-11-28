import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuth");

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
        <Link className="navbar-brand fw-bold" to="/products">
          Product Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isAuthenticated === "true" && (
              <>
                <li className="nav-item fw-bold">
                  <Link className="nav-link" to="/products">Product List</Link>
                </li>
                <li className="nav-item fw-bold">
                  <Link className="nav-link" to="/add-product">Add Product</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            {isAuthenticated !== "true" ? (
              <li className="nav-item">
                <Link className="btn btn-success" to="/login">Login</Link>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
