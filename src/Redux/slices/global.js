import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: { theme: "ligth" },
  reducers: {
    toggleTheme: (state, action) => {
      if (action.payload == "ligth") {
        return { theme: "dark" };
      } else {
        return { theme: "ligth" };
      }
    },
  },
});
export const { toggleTheme } = globalSlice.actions;
export default globalSlice.reducer;
