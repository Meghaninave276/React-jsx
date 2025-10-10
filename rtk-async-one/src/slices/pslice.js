import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
const fetchp=createAsyncThunk('products/fetchProducts',async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    return data;

})

const pslice=createSlice({
    name:"book",
    initialState:{
        products:[],
        totals:800,
        isloading:true,
        eroor:null,
    },
    reducers:{
        addp:(state,action)=>{
            const data=action.payload;
            state.product.push(data);

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchp.pending,(state,action)=>{
            state.isloading=true;
            state.eroor=null;
        }).addCase(fetchp.fulfilled,(state,action)=>{
            state.product=action.payload;
        }).addCase(fetchp.rejected,(state)=>{
            state.isloading=false;
        });

    },
        
    
})
export default pslice.reducer;
export const {addp}=pslice.actions;
