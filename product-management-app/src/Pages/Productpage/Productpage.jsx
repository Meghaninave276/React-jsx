import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts,deleteProduct } from "../../slices/productslice";
import { useNavigate } from "react-router-dom";

export default function Productpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Products</h2>
        <button
          className="btn btn-success"
          onClick={() => navigate("/add-product")}
        >
          ➕ Add Product
        </button>
      </div>

      {loading && <h4 className="text-center mt-4">Loading...</h4>}
      {error && <h4 className="text-danger text-center mt-4">{error}</h4>}

      <div className="row mt-4">
        {items.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="fw-bold">{product.title}</h6>
                <p className="mb-1 text-muted">{product.category}</p>
                <p className="fw-semibold">₹ {product.price}</p>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/edit-product/${product.id}`)}
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && !loading && (
          <h5 className="text-center text-muted mt-4">
            No products found. Add one!
          </h5>
        )}
      </div>
    </div>
  );
}
