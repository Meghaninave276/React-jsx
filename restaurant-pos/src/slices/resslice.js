import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const resmenu = createAsyncThunk(
  "resmenu/fetch",
  async () => {
    const res = await axios.get("http://localhost:3000/menu");
    return res.data;
  }
);

const reslice = createSlice({
    name: "menu",
    initialState: {
        res: [],
        isLoading: true,
        error: null,
    },
    reducers: {
        addmenu: (state, action) => {
            state.res.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(resmenu.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resmenu.fulfilled, (state, action) => {
                state.res = action.payload;
                state.isLoading = false;
            })
            .addCase(resmenu.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default reslice.reducer;
export const { addmenu } = reslice.actions;
