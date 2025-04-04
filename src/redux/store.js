// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";  // Import the reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Add reducers here
  },
});

export default store;
