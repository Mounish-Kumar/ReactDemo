import React from "react";
import "./styles.scss";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

class TodoItem extends React.Component {
  render() {
    const { task, onComplete, onDelete } = this.props;
    const { id, name, addedDateTime, completedDateTime } = task;

    return (
      <div className="todo-card">
        <div className="todo-item">
          <div className={"todo-name " + (completedDateTime ? "strike" : "")}>
            {id + " : " + name}
          </div>
          <div className="todo-icons">
            <IconButton
              size="large"
              onClick={() => onComplete(id)}
              disabled={!!completedDateTime}
            >
              <CheckCircleIcon />
            </IconButton>
            <IconButton size="large" onClick={() => onDelete(id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <div className="todo-timestamps">
          {addedDateTime && <div>Added on: {addedDateTime}</div>}
          {completedDateTime && <div>Completed on: {completedDateTime}</div>}
        </div>
      </div>
    );
  }
}

export default TodoItem;
