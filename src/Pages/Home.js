import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../images/bg1.png";

function Home() {
  return (
    <div>
      <div>
        <Link
          to="/login"
          style={{
            position: "absolute",
            display: "flex",
            width: "8vw",

            marginTop: "20.5rem",
            marginLeft: "43.8rem",

            justifyContent: "center",
            alignItems: "center",

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
      </div>
      <div>
        <img src={bg1} alt="main" style={{ height: "100vh", width: "100vw" }} />
      </div>
    </div>
  );
}

export default Home;
