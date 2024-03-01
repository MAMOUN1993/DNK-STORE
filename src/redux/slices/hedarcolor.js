import { createSlice } from "@reduxjs/toolkit";
export const headercolor = createSlice({
    initialState:"false",
    name : "headercolor",
    reducers:({
        setheaderfalse:(state)=>{
            return "false"
        },
        setheadertrue:(state)=>{
            return "true"
        }
    })
})

export const {setheaderfalse, setheadertrue}=headercolor.actions;
export default headercolor.reducer;