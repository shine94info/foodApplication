// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...item, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
// addToCart: (state, action) => {
    //   const { item, quantity } = action.payload;
    //   if (!state.items) {
    //     state.items = [];
    //   }

    //   const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

    //   if (existingItem) {
    //     existingItem.quantity += quantity;

    //     // Remove the item from the cart if the quantity becomes zero or negative
    //     if (existingItem.quantity <= 0) {
    //       state.items = state.items.filter((cartItem) => cartItem.id !== item.id);
    //     }
    //   } else {
    //     state.items.push({ id: item.id, quantity: 1, ...item });
    //   }
    // },