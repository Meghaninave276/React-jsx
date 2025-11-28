import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../slices/productslice"

export const store = configureStore({
  reducer: {
    products: productreducer,
  },
});
