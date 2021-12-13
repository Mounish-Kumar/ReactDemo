import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "../todo-list/TodoListFn";
import Header from "../shared/header/Header";
import Loader from "../shared/loader/Loader";
import Dashboard from "./../dashboard/Dashboard";
import Employee from "../employee/Employee";
import EmployeeDetail from "../employee/employee-detail/EmployeeDetail";
import Counter from "./../counter/CounterFn";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/create" element={<EmployeeDetail />} />
          <Route path="/employee/:employeeId" element={<EmployeeDetail />} />
          <Route path="*" element={<Navigate replace to="/dashboard" />} />
        </Routes>

        {this.props.loader && <Loader />}
      </HashRouter>
    );
  }
}

const mapStoreToProps = (store) => ({
  loader: store.app.loader,
});

export default connect(mapStoreToProps)(App);
