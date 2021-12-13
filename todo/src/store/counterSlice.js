import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrementByValue: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
