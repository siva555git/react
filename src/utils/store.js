import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartslice";

const Store = configureStore({
    reducer: {
        cart: CartSlice
    }
});

export default Store;