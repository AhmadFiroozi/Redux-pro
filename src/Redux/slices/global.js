import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: { theme: "light" },
  reducers: {
    // بدون payload: خود reducer حالت فعلی را می‌داند
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = globalSlice.actions;
export default globalSlice.reducer;
