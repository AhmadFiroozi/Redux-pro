import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../api";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/courses`);

      // fetch فقط روی خطای شبکه reject می‌شود؛ ۴۰۴ و ۵۰۰ را باید دستی چک کرد
      if (!response.ok) {
        return rejectWithValue("دریافت اطلاعات با مشکل مواجه شد");
      }

      return await response.json();
    } catch {
      return rejectWithValue("دریافت اطلاعات با مشکل مواجه شد");
    }
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default coursesSlice.reducer;
