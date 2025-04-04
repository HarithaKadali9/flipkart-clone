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
      const existigItem=state.items.find(item=>item.id===action.payload.id);
      if(existigItem){
        existigItem.quantity+=1;
      }else{
        state.items.push({...action.payload, quantity: 1});
      }
      
      state.totalQuantity += 1;
      state.totalPrice+=parseInt(action.payload.rupees);
    },
    removeItem: (state, action) => {
      const existigItemIndex=state.items.findIndex(item=>item.id===action.payload.id);
      if(existigItemIndex!=-1){
        const existigItem=state.items[existigItemIndex];

        if(existigItem.quantity>1){
          existigItem.quantity-=1;
        }
        else{
          state.items.splice(existigItemIndex,1);
        }
        state.totalQuantity -= 1;
        state.totalPrice-=parseInt(action.payload.rupees);
      }
      
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
