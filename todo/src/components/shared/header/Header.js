import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="menu">
        <NavLink to="/dashboard" className="menu-item" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink to="/todo" className="menu-item" activeClassName="active">
          Todo
        </NavLink>
        <NavLink to="/employee" className="menu-item" activeClassName="active">
          Employees
        </NavLink>
      </div>
    );
  }
}

export default Header;
