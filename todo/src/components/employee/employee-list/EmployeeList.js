import { useNavigate } from "react-router-dom";

export default function EmployeeList(props) {
  const navigate = useNavigate();

  const employees = [
    {
      id: 1,
      firstName: "Mounish Kumar",
      lastName: "V",
      email: "mounish@example.com",
      phone: "99999 99999",
      address: "Perumbakkam",
      designation: "Developer",
      level: "L1",
    },
    {
      id: 2,
      firstName: "Deepan",
      lastName: "V",
      email: "deeps@example.com",
      phone: "99999 99999",
      address: "Madipakkam",
      designation: "Manager",
      level: "L4",
    },
    {
      id: 3,
      firstName: "Shan",
      lastName: "V",
      email: "shan@example.com",
      phone: "99999 99999",
      address: "Velacherry",
      designation: "Lead",
      level: "L3",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.email}</td>
            <td>
              <button onClick={() => navigate(`/employee/${emp.id}`)}>
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
