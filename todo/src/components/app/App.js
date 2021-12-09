import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "../todo-list/TodoListFn";
import Header from "../shared/header/Header";
import Loader from "../shared/loader/Loader";
import Dashboard from "./../dashboard/Dashboard";
import Employee from "../employee/Employee";
import EmployeeDetail from "../employee/employee-detail/EmployeeDetail";

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
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/todo"
            element={
              <TodoList
                showLoader={this.showLoader}
                hideLoader={this.hideLoader}
              />
            }
          />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/create" element={<EmployeeDetail />} />
          <Route path="/employee/:employeeId" element={<EmployeeDetail />} />
          <Route path="*" element={<Navigate replace to="/dashboard" />} />
        </Routes>

        {this.state.loader && <Loader />}
      </HashRouter>
    );
  }
}

export default App;
