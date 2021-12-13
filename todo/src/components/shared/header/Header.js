import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="menu">
        <NavLink to="/dashboard" className="menu-item">
          Dashboard
        </NavLink>
        <NavLink to="/todo" className="menu-item">
          Todo
        </NavLink>
        <NavLink to="/counter" className="menu-item">
          Counter
        </NavLink>
        <NavLink to="/employee" className="menu-item">
          Employee
        </NavLink>
      </div>
    );
  }
}

export default Header;
