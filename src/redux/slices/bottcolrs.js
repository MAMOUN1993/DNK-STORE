import { createSlice } from "@reduxjs/toolkit";
export const bottclors = createSlice({
    initialState : "def",
    name: "botclors",
    reducers:{
        chahngecolorbotton:(state ,actions)=>{
            return actions.payload;
        }
    }
})
export const {chahngecolorbotton} = bottclors.actions;
export default bottclors.reducer;