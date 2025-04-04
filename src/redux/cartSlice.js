// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalQuantity += 1;
      state.totalPrice+=parseInt(action.payload.rupees);
    },
    removeItem: (state, action) => {
      const itemToRemove=state.items.find(item=>item.id===action.payload.id);
      if(itemToRemove){
        state.items.pop();
        state.totalQuantity -= 1;
        state.totalPrice-=parseInt(action.payload.rupees);
      }
      
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
