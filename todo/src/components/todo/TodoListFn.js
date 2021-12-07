import { useState, useEffect } from "react";
import TodoItem from "./TodoItemFn";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getCurrentTime } from "../../utils/utils";
import ErrorBoundary from "../errorboundary/ErrorBoundary";

export default function TodoList(props) {
  const [previousId, setPreviousId] = useState(0);
  const [taskToAdd, setTaskToAdd] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // http call to get taskList
    const response = {
      status: "OK",
      list: [
        { id: 1, name: "Eat", addedDateTime: "26/12/1991 12:00:00" },
        {
          id: 2,
          name: "Sleep",
          addedDateTime: "01/01/2020 12:00:00",
          completedDateTime: "02/01/2021 12:00:00",
        },
        { id: 3, name: "Repeat", addedDateTime: "26/12/1991 12:00:00" },
        // null,
      ],
    };

    setTaskList(response.list);
    setPreviousId(response.list.length);
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
            <ErrorBoundary>
              <TodoItem
                key={task.id}
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
