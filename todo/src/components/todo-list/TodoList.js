import React from "react";
import TodoItem from "./todo-item/TodoItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getCurrentTime } from "../../utils/utils";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import axios from "axios";

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
    this.props.showLoader();

    axios
      .get(`http://localhost:8080/api/todos`)
      .then((res) => {
        if (res && res.data && res.data.list) {
          this.setState({
            taskList: res.data.list,
            previousId: res.data.list.length,
          });
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          console.log(error.response.data);
        }
      })
      .then(() => {
        this.props.hideLoader();
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
              <ErrorBoundary key={task.id}>
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
