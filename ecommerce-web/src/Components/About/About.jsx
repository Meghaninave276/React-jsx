import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page text-light">
      {/* Hero Section */}
      <section className="about-hero text-center">
        <h1>About Us</h1>
        <p>Home / About Us</p>
      </section>

      {/* About Content */}
      <section className="about-content container py-5 d-flex flex-lg-row flex-column align-items-center">
        <div className="col-lg-6 col-12 mb-4">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="About"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-6 col-12 ps-lg-5">
          <h5 className="text-uppercase text-primary">About Us</h5>
          <h2 className="fw-bold">We Always Make The Best</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            odio placerat, convallis neque quis, interdum leo. Nam hendrerit urna
            nibh, eget sagittis erat varius non. Duis ut varius augue.
          </p>
          <button className="btn btn-outline-light mt-3">Contact Us</button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section container py-5">
        <h3 className="fw-bold">Our Skills</h3>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
        </p>

        <div className="skill-item">
          <p>Video Editing</p>
          <div className="progress">
            <div className="progress-bar bg-primary" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>

        <div className="skill-item">
          <p>Videography</p>
          <div className="progress">
            <div className="progress-bar bg-success" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>

        <div className="skill-item">
          <p>Branding</p>
          <div className="progress">
            <div className="progress-bar bg-warning" style={{ width: "77%" }}>
              77%
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row text-center mt-5">
          <div className="col-md-3 col-6">
            <h2>20+</h2>
            <p>Year Of Experience</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>1,000+</h2>
            <p>Project Done</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>300+</h2>
            <p>Satisfied Client</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>64</h2>
            <p>Certified Award</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section text-center text-light py-5">
        <h5>Hire Us Now</h5>
        <h2 className="fw-bold">We Are Always Ready To Take A Perfect Shot</h2>
        <button className="btn btn-primary mt-3">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="footer-section text-center text-md-start py-4">
        <div className="container row mx-auto">
          <div className="col-md-4 mb-3">
            <h5>VIGRAPH STUDIO</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Our Store</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Get In Touch</h6>
            <p>📍 2443 Oak Ridge Omaha, OA 45065</p>
            <p>📞 207-987-452</p>
            <p>✉ support@site.com</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>Copyright © 2023 vigraph | Powered by vigraph</small>
        </div>
      </footer>
    </div>
  );
}
