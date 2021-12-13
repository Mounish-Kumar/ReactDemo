import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import employeeReducer from "./employeeSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
    todo: todoReducer,
    employee: employeeReducer,
  },
});
