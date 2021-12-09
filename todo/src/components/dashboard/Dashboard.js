import { useNavigate } from "react-router-dom";

export default function Dashboard(props) {
  const navigate = useNavigate();

  return (
    <>
      <h3>You're in Dashboard Component!</h3>
      <button onClick={() => navigate("/todo")}>Go to Todo</button>
    </>
  );
}
