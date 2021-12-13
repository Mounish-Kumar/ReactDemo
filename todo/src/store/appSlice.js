import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    loader: false,
  },
  reducers: {
    showLoader: (state, action) => {
      state.loader = true;
    },
    hideLoader: (state, action) => {
      state.loader = false;
    },
  },
});

export const { showLoader, hideLoader } = appSlice.actions;

export default appSlice.reducer;
