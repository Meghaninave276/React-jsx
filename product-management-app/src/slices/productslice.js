import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

// Fetch Products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// Add Product
export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
  const res = await axios.post(API_URL, product);
  return res.data;
});

// Update Product
export const updateProduct = createAsyncThunk("products/updateProduct", async (product) => {
  const res = await axios.put(`${API_URL}/${product.id}`, product);
  return res.data;
});

// Delete Product
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(fetchProducts.rejected, (state) => { state.loading = false; state.error = "Failed to fetch products"; })
      // add
      .addCase(addProduct.fulfilled, (state, action) => { state.items.push(action.payload); })
      // update
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      // delete
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
