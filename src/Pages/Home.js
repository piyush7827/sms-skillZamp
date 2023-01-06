import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../images/bg1.png";

function Home() {
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   navigate("/login");
  // };
  return (
    <div>
      <Link
        to="/login"
        style={{
          position: "absolute",
          marginLeft: "648px",
          marginTop: "300px",
          border: "5px solid cyan",
          background: "cyan",
          color: "darkred",
          fontWeight: "700",
          borderRadius: "10px",
          textDecoration: "none",
        }}
      >
        Click Me
      </Link>

      <img src={bg1} alt="main" style={{ height: "100vh", width: "100vw" }} />
    </div>
  );
}

export default Home;
