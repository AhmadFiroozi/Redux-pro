import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { addedToCart: 0, total: 0, addedProducts: [] },
  reducers: {
    addToCart: (state, action) => {
      ((state.addedToCart += 1),
        (state.total += action.payload.price),
        state.addedProducts.push(action.payload));
    },
    removeFromCart: (state, action) => {
      const filteredProducts = state.addedProducts.filter(
        (product) => product.id !== action.payload.id,
      );

      state.addedToCart -= 1;
      state.total -= action.payload.price;
      state.addedProducts = filteredProducts;
    },
  },
});

// console.log(cartSlice)

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
