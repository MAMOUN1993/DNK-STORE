import { createSlice } from "@reduxjs/toolkit";
export const count = createSlice({
    initialState : 0.00,
    name : "count",
    reducers:{
        setCount:(state, actions)=>{
            return actions.payload+state;
        },
        remoceCount:(state , actions)=>{
            return  state-actions.payload;
        },
        resetCount : (state , actions)=>{
            return actions.payload
        }
    }
});

export const {setCount , remoceCount , resetCount} = count.actions;
export default count.reducer;