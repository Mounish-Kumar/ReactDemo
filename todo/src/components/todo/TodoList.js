import React from "react";
import TodoItem from "./TodoItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getCurrentTime } from "../../utils/utils";
import ErrorBoundary from "../errorboundary/ErrorBoundary";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousId: 0,
      taskToAdd: "",
      taskList: [],
    };
  }

  componentDidMount() {
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
    this.setState({
      taskList: response.list,
      previousId: response.list.length,
    });
  }

  render() {
    const { taskToAdd, taskList } = this.state;

    return (
      <div style={{ padding: "1rem" }}>
        <TextField
          label="Enter a task"
          variant="outlined"
          value={taskToAdd}
          onChange={this.handleChange}
        />
        <IconButton size="large" onClick={this.addTask}>
          <AddCircleIcon />
        </IconButton>
        <div>
          {taskList &&
            taskList.map((task) => (
              <ErrorBoundary>
                <TodoItem
                  task={task}
                  onComplete={this.completeTask}
                  onDelete={this.deleteTask}
                />
              </ErrorBoundary>
            ))}
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ taskToAdd: event.target.value });
  };

  addTask = () => {
    const { previousId, taskToAdd, taskList } = this.state;
    const newId = previousId + 1;
    const newTask = {
      id: newId,
      name: taskToAdd,
      addedDateTime: getCurrentTime(),
    };

    this.setState({
      previousId: newId,
      taskToAdd: "",
      taskList: [...taskList, newTask],
    });
  };

  completeTask = (completedId) => {
    const { taskList } = this.state;
    const updatedList = taskList.map((task) => {
      const completedDateTime =
        task.id === completedId ? getCurrentTime() : task.completedDateTime;
      return { ...task, completedDateTime };
    });

    this.setState({
      taskList: updatedList,
    });
  };

  deleteTask = (idToBeDeleted) => {
    const { taskList } = this.state;
    const updatedList = taskList.filter((task) => task.id !== idToBeDeleted);

    this.setState({
      taskList: updatedList,
    });
  };
}

export default TodoList;
