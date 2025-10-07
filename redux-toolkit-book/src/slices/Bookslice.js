import {createSlice} from '@reduxjs/toolkit'
const bookslice=createSlice({
    name:"book",
    initialState:{
        books:[],
        totals:150,
       daily_visitors:400,
    },reducers:{
        addbook:(state,action)=>{
            const data=action.payload;
            state.books.push(data)

        },
        removebook:(state,action)=>{
            const index=action.payload;
            state.books.splice(index,1);

        },
        updatebook:(state,action)=>{
           const {index,value}=action.payload;
           state.books[index]=value;
            
        }
    }
})
export default bookslice.reducer;
export const {addbook,removebook,updatebook}=bookslice.actions;