import React from "react";
import "./styles.scss";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

class TodoItem extends React.Component {
  render() {
    const {
      id,
      name,
      addedTimestamp,
      completedTimestamp,
      onComplete,
      onDelete,
    } = this.props;

    return (
      <div className="todo-card">
        <div className="todo-item">
          <div className={"todo-name " + (completedTimestamp ? "strike" : "")}>
            {id + " : " + name}
          </div>
          <div className="todo-icons">
            <IconButton
              size="large"
              onClick={() => onComplete(id)}
              disabled={!!completedTimestamp}
            >
              <CheckCircleIcon />
            </IconButton>
            <IconButton size="large" onClick={() => onDelete(id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <div className="todo-timestamps">
          {addedTimestamp && <div>Added on: {addedTimestamp}</div>}
          {completedTimestamp && <div>Completed on: {completedTimestamp}</div>}
        </div>
      </div>
    );
  }
}

export default TodoItem;
