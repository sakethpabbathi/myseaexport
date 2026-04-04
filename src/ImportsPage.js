import { useNavigate } from "react-router-dom";

const ImportsPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Imports</h2>

      <div style={card} onClick={() => navigate("/feed")}>
        Feed
      </div>

      <div style={card} onClick={() => navigate("/hcp")}>
        HCP
      </div>
    </div>
  );
};

const card = {
  padding: "20px",
  background: "#eee",
  margin: "10px",
  cursor: "pointer",
};

export default ImportsPage;