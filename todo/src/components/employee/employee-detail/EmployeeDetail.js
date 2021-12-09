import { useParams, useLocation } from "react-router-dom";

export default function EmployeeDetail(props) {
  const params = useParams();
  const location = useLocation();
  const isCreate = location.pathname.endsWith("/create");

  return (
    <h3>
      {isCreate ? `Create Employee` : `View Employee ID=${params.employeeId}`}
    </h3>
  );
}
