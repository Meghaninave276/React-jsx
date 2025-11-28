import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../slices/productslice";
import { useNavigate } from "react-router-dom";

const Productitem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(product.id));
    }
  };

  const handleEdit = () => {
    navigate(`/edit-product/${product.id}`);
  };

  return (
    <div className="card shadow-sm h-100">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title fw-bold">{product.title}</h5>
        <p className="card-text text-muted">₹{product.price}</p>
        <p className="badge bg-info">{product.category}</p>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-warning btn-sm" onClick={handleEdit}>
          ✏ Edit
        </button>

        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default Productitem;
