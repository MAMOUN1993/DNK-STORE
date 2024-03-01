import { createSlice } from "@reduxjs/toolkit";
export const price =createSlice({
    initialState: 0.00,
    name : "price",
    reducers:{
        clacPrice:( state, actions)=>{
            let localVar = 0 ; 
            localVar = +(actions.payload+state).toFixed(2)
            return localVar;
        },
        removePrice:(state,actions)=>{
            let localVar = 0 ; 
            localVar = +(state-actions.payload).toFixed(2)
            return localVar;
        },
        restPrice:(state ,actions)=>{
            return (actions.payload);
        } 
    }
});


export const {clacPrice ,removePrice,restPrice} = price.actions;
export default price.reducer;