import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
import movecartSlice from "./slices/movecartSlice"; 
import movesecheader from "./slices/movesecheader";
import headercolor  from "./slices/hedarcolor";
import products  from "./slices/products";
import clacPrice  from "./slices/price";
import count from "./slices/count";
import font  from "./slices/fontslice";
import  bottclors  from "./slices/bottcolrs";
export const store = configureStore({
    reducer:{
        color : colorSlice,
        movecart : movecartSlice,
        movehead : movesecheader,
        headcolor : headercolor,
        cartProducts : products,
        price : clacPrice,
        totalCount : count,
        font : font,
        bottcolors : bottclors,
    },
})