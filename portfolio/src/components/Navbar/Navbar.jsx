import {useState} from 'react';
import "./navbar.css";

export default function Navbar() {
  return (
    <>
    <section className='navbar-sec'>
        <div className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>



    </section>
    </>
  )
}
