import { useEffect } from "react";
import TodoItem from "./todo-item/TodoItemFn";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../store/appSlice";
import {
  setTaskToAdd,
  setTaskList,
  addTask,
  completeTask,
  deleteTask,
} from "../../store/todoSlice";

export default function TodoList(props) {
  const taskToAdd = useSelector((store) => store.todo.taskToAdd);
  const taskList = useSelector((store) => store.todo.taskList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoader());

    axios
      .get(`http://localhost:8080/api/todos`)
      .then((res) => {
        if (res && res.data && res.data.list) {
          dispatch(setTaskList(res.data.list));
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          console.log(error.response.data);
        }
      })
      .then(() => {
        dispatch(hideLoader());
      });
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <TextField
        label="Enter a task"
        variant="outlined"
        value={taskToAdd}
        onChange={(event) => dispatch(setTaskToAdd(event.target.value))}
      />
      <IconButton size="large" onClick={() => dispatch(addTask())}>
        <AddCircleIcon />
      </IconButton>
      <div>
        {taskList &&
          taskList.map((task) => (
            <ErrorBoundary key={task.id}>
              <TodoItem
                task={task}
                onComplete={(completedId) =>
                  dispatch(completeTask(completedId))
                }
                onDelete={(idToBeDeleted) =>
                  dispatch(deleteTask(idToBeDeleted))
                }
              />
            </ErrorBoundary>
          ))}
      </div>
    </div>
  );
}
