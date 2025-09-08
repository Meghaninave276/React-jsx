import React from 'react';
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 // Add this if using Remix Icons

export default function Contact() {
  return (
    <div>
      <section className="contact-us" id="contact">
        <h2 className="fw-bold text-center">Contact Us</h2>
        <div className="container d-flex justify-content-between flex-wrap mt-4">
          
          {/* Contact Form */}
          <div className="contact-form w-50">
            <form action="" method="POST" className="mt-4">
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                name="send_message"
                className="btn w-100"
                style={{ background: '#111', color: '#fff' }}
              >
                SEND
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info w-40 ms-4">
            <h3 className="mb-4">Info</h3>
            <p><i className="ri-mail-line me-2"></i> Time&essence@gmail.com</p>
            <p><i className="ri-phone-line me-2"></i> +91 76984 70422</p>
            <p><i className="ri-map-pin-line me-2"></i> 14 Greenroad, London, UK</p>
            <p><i className="ri-time-line me-2"></i> 09:00 - 9:00</p>
          </div>
        </div>
      </section>
    </div>
  );
}
