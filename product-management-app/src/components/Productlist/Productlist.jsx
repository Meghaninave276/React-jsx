import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productslice";
import Productitem from "../Productitem/Productitem";

const Productlist = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  // Local UI states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter & Sort Logic
  const filteredProducts = items
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category ? product.category === category : true
    )
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold">Product Management</h2>

      {/* Search + Filter + Sort */}
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="men-tshirt">Men T-Shirts</option>
            <option value="men-jeans">Men Jeans</option>
            <option value="women-tshirt">Women T-Shirts</option>
            <option value="women-jeans">Women Jeans</option>
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {loading ? (
        <h5 className="text-center text-muted">Loading products...</h5>
      ) : (
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-md-4 mb-3" key={product.id}>
                <Productitem product={product} />
              </div>
            ))
          ) : (
            <h5 className="text-center text-muted">No products found</h5>
          )}
        </div>
      )}
    </div>
  );
};

export default Productlist;
