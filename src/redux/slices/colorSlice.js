import { createSlice } from "@reduxjs/toolkit";
export const colorSlice = createSlice({
    initialState: "false",
    name:'colorSlice',
    reducers:{
        changevalue:(state , actions) =>{
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


export const {changevalue} = colorSlice.actions;
export default colorSlice.reducer;