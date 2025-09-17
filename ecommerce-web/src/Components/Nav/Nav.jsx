import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css";
export default function Nav() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/nav"}>Home</Link>
               
              </li>
              <li className="nav-item">
                <Link to={"/about"}>About</Link>
              </li>
            
              <li className="nav-item">
               <Link to={"/project"}>Projects</Link>
              </li>
               <li className="nav-item">
               <Link to={"/product"}>products</Link>
              </li>
               <li className="nav-item">
               <Link to={"/cart"}>Cart</Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://static.vecteezy.com/system/resources/previews/006/547/168/original/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg" alt="" width={72} height={57} />
        <h1 className="display-5 fw-bold">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
      </div>
    </div>
  )
}
