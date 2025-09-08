import React from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Register() {
  return (
    <div className="container mt-5">
      <div className="form p-4 border rounded shadow">
        <form method="post">
          <h2 className="mb-4">Registration Page</h2>
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Your Name" required />
          </div>
          <div className="form-group mb-3">
            <input type="email" className="form-control" placeholder="Enter Your Email" required />
          </div>
          <div className="form-group mb-3">
            <select className="form-control" required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <input type="password" className="form-control" placeholder="Enter Your Password" required />
          </div>
          <div className="form-group mb-3">
            <input type="password" className="form-control" placeholder="Confirm Your Password" required />
          </div>
          <button className="btn btn-primary w-100">Register Now</button>
          <p className="mt-3 text-center">
            Already Have An Account? <a href="#">Login Now</a>
          </p>
        </form>
      </div>
    </div>
  );
}
