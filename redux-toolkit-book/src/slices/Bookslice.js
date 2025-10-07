import {createSlice} from '@reduxjs/toolkit'
const bookslice=createSlice({
    name:"book",
    initialState:{
        books:[],
        totals:150,
       daily_visitors:400,
    },reducers:{
        addbook:()=>{

        }
    }
})
export default bookslice.reducer;
export const {addbook}=bookslice.actions;