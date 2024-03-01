import { createSlice } from "@reduxjs/toolkit";
export const movecartSlice = createSlice({
    initialState: "false",
    name : "movecartSlice",
    reducers:{
        changemovecart:(state , actions)=>{
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
})

export const {changemovecart} = movecartSlice.actions;
export default movecartSlice.reducer;