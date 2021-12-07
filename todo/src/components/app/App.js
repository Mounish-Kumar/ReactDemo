import React from "react";
import TodoList from "../todo/TodoList";
import ErrorBoundary from "./../errorboundary/ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <TodoList></TodoList>
      </ErrorBoundary>
    );
  }
}

export default App;
