import { createSlice } from "@reduxjs/toolkit";
export const moveheader = createSlice({
    initialState: "false",
    name:"moveheader",
    reducers:{
        changemoveheader:(state ,actions)=>{
            if(actions.payload === 1){
                return "false"
            }else{
                if(state === "true"){
                    return "false"
                }else{
                    return "true"
                }            
            }
        }
    }
});
export const {changemoveheader} =moveheader.actions;
export default moveheader.reducer;