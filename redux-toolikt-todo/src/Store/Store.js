import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../Slices/Todoslice"
const store=configureStore({
    reducer:{
        todos:todoreducer,
    },
});
export default store;