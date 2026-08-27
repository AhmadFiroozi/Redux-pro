import { createSlice } from "@reduxjs/toolkit";

/**
 * سبد خرید با پشتیبانی از «تعداد».
 * جمع کل و تعداد کل از روی items محاسبه می‌شوند تا هیچ‌وقت با هم ناهماهنگ نشوند —
 * نگه‌داشتن total به‌صورت جداگانه، منبع اصلی باگ در نسخهٔ قبلی بود.
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);

      if (existing) {
        existing.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },

    increaseCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.count += 1;
    },

    decreaseCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;

      item.count -= 1;
      if (item.count <= 0) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// ── Selectors: منطق محاسبه یک‌جا می‌ماند و در کامپوننت‌ها تکرار نمی‌شود
export const selectCartItems = (store) => store.cart.items;

export const selectCartCount = (store) =>
  store.cart.items.reduce((sum, item) => sum + item.count, 0);

export const selectCartTotal = (store) =>
  store.cart.items.reduce((sum, item) => sum + item.price * item.count, 0);

export const { addToCart, increaseCount, decreaseCount, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
