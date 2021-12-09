import EmployeeList from "./employee-list/EmployeeList";
import { useNavigate } from "react-router-dom";

export default function Employee(props) {
  const navigate = useNavigate();

  return (
    <>
      <h2>Employee</h2>
      <button onClick={() => navigate("/employee/create")}>
        Create Employee
      </button>
      <br />
      <br />
      <EmployeeList />
    </>
  );
}
