import {createSlice} from "@reduxjs/toolkit"
const todoSlice=createSlice({
    name:"todo",
    initialState:{
        message:"this is a message",
        todos:[],
    },
    reducers:{
        addtodo:(state,action)=>{
            const data=action.payload;
            state.todos.push(data);


        },
        removetodo:(state,action)=>{

        },
        updatetodo:()=>{

        }
    },
})
 export default todoSlice.reducer;
 export const {addtodo,removetodo,updatetodo}=todoSlice.actions;