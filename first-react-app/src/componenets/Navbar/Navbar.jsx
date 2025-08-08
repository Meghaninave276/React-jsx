import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1>Travel</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button>Login</button>
    </nav>
  );
};