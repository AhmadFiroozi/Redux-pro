import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fechCourses = createAsyncThunk(
  "courses/fechCoursesStatus",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/courses");
      const courses = await res.json();
      return courses;
    } catch (err) {
      return rejectWithValue("دریافت اطلاعات با مشکل مواجه شد");
    }
  },
);
export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loding: false,
    errorMasage: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fechCourses.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loding = false;
    });
    builder.addCase(fechCourses.pending, (state, action) => {
      state.loding = true;
    });
    builder.addCase(fechCourses.rejected, (state, action) => {
      state.loding = false;
      state.errorMasage = action.payload;
    });
  },
});

export default coursesSlice.reducer;
