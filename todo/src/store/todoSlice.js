import { createSlice } from "@reduxjs/toolkit";
import { getCurrentTime } from "../utils/utils";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    previousId: 0,
    taskToAdd: "",
    taskList: [],
  },
  reducers: {
    setTaskToAdd: (state, action) => {
      state.taskToAdd = action.payload;
    },
    setTaskList: (state, action) => {
      state.taskList = action.payload;
      state.previousId = action.payload.length;
    },
    addTask: (state, action) => {
      const newTaskId = state.previousId + 1;
      const newTask = {
        id: newTaskId,
        name: state.taskToAdd,
        addedDateTime: getCurrentTime(),
      };
      state.previousId = newTaskId;
      state.taskToAdd = "";
      state.taskList.push(newTask);
    },
    completeTask: (state, action) => {
      const completedIndex = state.taskList.findIndex(
        (task) => task.id === action.payload
      );
      state.taskList[completedIndex].completedDateTime = getCurrentTime();
    },
    deleteTask: (state, action) => {
      const indexToBeDeleted = state.taskList.findIndex(
        (task) => task.id === action.payload
      );
      state.taskList.splice(indexToBeDeleted, 1);
    },
  },
});

export const { setTaskToAdd, setTaskList, addTask, completeTask, deleteTask } =
  todoSlice.actions;

export default todoSlice.reducer;
