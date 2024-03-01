import { createSlice } from "@reduxjs/toolkit";

export const products = createSlice({
    initialState : [],
    name : "products",
    reducers:{
        addProducts :(state,actions)=>{
            return [...state , actions.payload]
        },
        deleteProducts :(state , actions)=>{
            return [...actions.payload]
        }
        
    }
})

export const {addProducts , deleteProducts} = products.actions;
export default products.reducer;