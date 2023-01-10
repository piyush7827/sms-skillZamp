import React from "react";
import { useNavigate } from "react-router-dom";
import forgot from "../images/forgot.png";
import "./forgot.css";

function Forgot() {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/Login");
  };
  return (
    <div className="solid" style={{ width: "100vw", height: "100vh" }}>
      <form>
        <div
          style={{
            height: "60vh",
            width: "35vw",
            marginLeft: "30%",
            border: "2px solid black",
          }}
        >
          <img
            style={{ height: "80px", marginLeft: "225px", marginTop: "10%" }}
            src={forgot}
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "20px", fontWeight: "800", marginTop: "30px" }}
            >
              Forgot Password?
            </span>
            <input
              style={{
                width: "400px",
                marginTop: "50px",
                borderStyle: "solid",
                borderBottom: "2px solid black",
                alignText: "center",
                borderColor: "blue",
                padding: "15px",
              }}
              type="text"
              placeholder="Enter UserName"
              required
            />
            <input
              style={{
                width: "400px",
                marginTop: "50px",
                borderStyle: "solid",
                borderBottom: "2px solid black",
                borderColor: "blue",
                padding: "15px",
              }}
              type="text"
              placeholder="Enter Email"
              required
            />
            <button
              style={{
                width: "400px",
                height: "50px",
                marginTop: "50px",
                backgroundColor: "blue",
                color: "#ffff",
              }}
            >
              Reset password
            </button>

            <span
              onClick={gotoHome}
              style={{
                marginLeft: "300px",
                marginTop: "20px",
                cursor: "pointer",
              }}
            >
              Go back to Login Page
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forgot;
