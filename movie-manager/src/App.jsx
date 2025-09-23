import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import "./App.css";


export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center mb-4">🎬 Favorite Movies Manager</h2>

        <nav className="mb-4 d-flex ">
          <Link className="btn  " to="/">
            Home
          </Link>
          <Link className="btn " to="/movies">
            Movies
          </Link>
        </nav>

      <switch>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
        </Routes>
      </switch>
      </div>
    </Router>
  );
}


