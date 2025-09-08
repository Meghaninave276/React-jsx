import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Navbar() {
    //   const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        {/* <section className='navbar'>
            <nav className="nav">
  
      <div className="navigation">
        <img
          src="/src/assets/logos.png"
          alt="Logo"
          
        />
        <span className="span">Time&Essence</span>
      </div>

      
      <ul className="ul">
        <li><a href="#" className="">Home</a></li>
        <li><a href="#" className="">About Us</a></li>
        <li><a href="#" className="">Watches</a></li>
        <li><a href="#" className="">Perfumes</a></li>
        <li><a href="#" className="">Contact Us</a></li>
        <li><a href="#" className="">Account</a></li>
      </ul>

   
      <div className="inputs">
        <input
          type="text"
          placeholder="Search"
          className="input"
        />
        <select className="filter">
          <option>All Prices</option>
          <option>0-50</option>
          <option>50-100</option>
          <option>100+</option>
        </select>
        <button className="search">
          Search
        </button>
      </div>
    </nav>

        </section> */}
        

<nav className="navbar navbar-expand-lg navbar-dark bg-dark " id='Nav'>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#"><img src="/src/assets/logos.png" alt="" />Time&Essence</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#Nav">Home</a>
              </li>
               <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#watch">Watches</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link " href="#perfume" tabIndex="-1" aria-disabled="true">Perfumes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contact" tabIndex="-1" aria-disabled="true">Contact Us</a>
              </li>
               <li className="nav-item">
                <a className="nav-link " href="" tabIndex="-1" aria-disabled="true"> Account</a>
              </li>
            </ul>
              
   <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
            <select
              className="form-select me-2"
              onChange={(e) => onPriceFilter(e.target.value)}
            >
              <option value="All">All Prices</option>
              <option value="0-50">0 - 50</option>
              <option value="50-100">50 - 100</option>
              <option value="100+">100+</option>
            </select>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          </div>
        </div>
      </nav>

    </div>
  )
}
