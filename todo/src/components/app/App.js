import React from "react";
import TodoList from "../todo-list/TodoListFn";
import ErrorBoundary from "./../error-boundary/ErrorBoundary";
import Loader from "../shared/loader/Loader";

class App extends React.Component {
  state = {
    loader: false,
  };

  showLoader = () => {
    this.setState({ loader: true });
  };

  hideLoader = () => {
    this.setState({ loader: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loader && <Loader />}
        <ErrorBoundary>
          <TodoList
            showLoader={this.showLoader}
            hideLoader={this.hideLoader}
          ></TodoList>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default App;
