import { createSlice } from "@reduxjs/toolkit";
export const font= createSlice({
    initialState : "Roboto",
    name : "font",
    reducers:{
        setfont:(state ,actions)=>{
            return actions.payload;
        }
    }
})
export const {setfont} =font.actions;
export default font.reducer;