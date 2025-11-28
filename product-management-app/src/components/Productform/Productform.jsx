import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../slices/productslice";
import { useNavigate } from "react-router-dom";

const Productform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!product.title || !product.price || !product.image || !product.category) {
      setError("All fields are required");
      return;
    }

    dispatch(addProduct({ ...product, price: parseFloat(product.price) }));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold text-center mb-4">Add New Product</h2>

      <div className="card shadow p-4">
        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-3">
            <label className="form-label">Product Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter product name"
              onChange={handleChange}
            />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price (₹)</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Enter price"
              onChange={handleChange}
            />
          </div>

          {/* Image */}
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              name="image"
              className="form-control"
              placeholder="Enter product image URL"
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              className="form-select"
              onChange={handleChange}
            >
              <option value="">Select category</option>
              <option value="men-tshirt">Men T-Shirt</option>
              <option value="men-jeans">Men Jeans</option>
              <option value="women-tshirt">Women T-Shirt</option>
              <option value="women-jeans">Women Jeans</option>
            </select>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Productform;
