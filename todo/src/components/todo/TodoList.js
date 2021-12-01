import React from "react";
import TodoItem from "./TodoItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousId: 0,
      taskToAdd: "",
      taskList: [],
    };
  }

  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <TextField
          label="Enter a task"
          variant="outlined"
          value={this.state.taskToAdd}
          onChange={this.handleChange}
        />
        <IconButton size="large" onClick={this.addTask}>
          <AddCircleIcon />
        </IconButton>
        <div>
          {this.state.taskList &&
            this.state.taskList.map((task) => (
              <TodoItem
                key={task.id}
                id={task.id}
                name={task.name}
                addedTimestamp={task.addedDateTime}
                completedTimestamp={task.completedDateTime}
                onComplete={this.completeTask}
                onDelete={this.deleteTask}
              />
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
    const item = {
      id: newId,
      name: taskToAdd,
      addedDateTime: this.getCurrentTime(),
    };

    this.setState({
      previousId: newId,
      taskToAdd: "",
      taskList: [...taskList, item],
    });
  };

  completeTask = (completedId) => {
    const { taskList } = this.state;
    const updatedList = taskList.map((task) => {
      const completedDateTime =
        task.id === completedId
          ? this.getCurrentTime()
          : task.completedDateTime;
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

  getCurrentTime = () => {
    var d = new Date();
    return (
      d.getUTCFullYear() +
      "/" +
      (d.getUTCMonth() + 1) +
      "/" +
      d.getUTCDate() +
      " " +
      d.getUTCHours() +
      ":" +
      d.getUTCMinutes() +
      ":" +
      d.getUTCSeconds()
    );
  };
}

export default TodoList;
