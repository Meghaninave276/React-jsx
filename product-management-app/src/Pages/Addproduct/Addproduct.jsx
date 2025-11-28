import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct,updateProduct } from "../../slices/productslice";
import { useNavigate, useParams } from "react-router-dom";
import "./Addproduct.css";

export default function Productform() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);

  const existingProduct = id ? items.find((item) => item.id === Number(id)) : null;

  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [existingProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.title || !product.price || !product.category || !product.image) {
      alert("Please fill all fields");
      return;
    }

    if (id) {
      dispatch(updateProduct(product));
      alert("Product Updated Successfully!");
    } else {
      dispatch(addProduct(product));
      alert("Product Added Successfully!");
    }

    navigate("/products");
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center">
        {id ? "Edit Product" : "Add Product"}
      </h2>

      <form className="mt-4 col-md-6 mx-auto shadow p-4 rounded" onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label className="form-label">Product Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={product.title}
            onChange={handleChange}
            placeholder="Enter product title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            name="category"
            className="form-control"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={product.image}
            onChange={handleChange}
            placeholder="Enter image link"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          {id ? "Update Product" : "Add Product"}
        </button>

      </form>
    </div>
  );
}
