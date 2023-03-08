import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"


const Store = configureStore ({
    reducer:{
        cart_items : cartSlice
    }
})

export default Store