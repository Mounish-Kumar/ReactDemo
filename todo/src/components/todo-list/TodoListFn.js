import { useState, useEffect } from "react";
import TodoItem from "./todo-item/TodoItemFn";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getCurrentTime } from "../../utils/utils";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import axios from "axios";

export default function TodoList(props) {
  const [previousId, setPreviousId] = useState(0);
  const [taskToAdd, setTaskToAdd] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    props.showLoader();

    axios
      .get(`http://localhost:8080/api/todos`)
      .then((res) => {
        if (res && res.data && res.data.list) {
          setTaskList(res.data.list);
          setPreviousId(res.data.list.length);
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          console.log(error.response.data);
        }
      })
      .then(() => {
        props.hideLoader();
      });
  }, []);

  const addTask = () => {
    const newId = previousId + 1;
    const newTask = {
      id: newId,
      name: taskToAdd,
      addedDateTime: getCurrentTime(),
    };

    setPreviousId(newId);
    setTaskToAdd("");
    setTaskList([...taskList, newTask]);
  };

  const completeTask = (completedId) => {
    const updatedList = taskList.map((task) => {
      const completedDateTime =
        task.id === completedId ? getCurrentTime() : task.completedDateTime;
      return { ...task, completedDateTime };
    });

    setTaskList(updatedList);
  };

  const deleteTask = (idToBeDeleted) => {
    const updatedList = taskList.filter((task) => task.id !== idToBeDeleted);

    setTaskList(updatedList);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <TextField
        label="Enter a task"
        variant="outlined"
        value={taskToAdd}
        onChange={(event) => setTaskToAdd(event.target.value)}
      />
      <IconButton size="large" onClick={addTask}>
        <AddCircleIcon />
      </IconButton>
      <div>
        {taskList &&
          taskList.map((task) => (
            <ErrorBoundary key={task.id}>
              <TodoItem
                task={task}
                onComplete={completeTask}
                onDelete={deleteTask}
              />
            </ErrorBoundary>
          ))}
      </div>
    </div>
  );
}
