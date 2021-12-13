import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
  },
  reducers: {
    updateEmployees: (state, action) => {},
  },
});

export const { updateEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
