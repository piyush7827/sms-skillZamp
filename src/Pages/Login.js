import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Login.css";
import login from "../images/login.png";
import user from "../images/user.png";
import pass from "../images/pass.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main">
      <div className="img">
        <img className="login-img" src={login} alt="login" />
        <h1>Welcome !</h1>
        <span className="sign-tag">Sign in to your account</span>
      </div>
      <div className="user-details">
        <div className="username">
          <input
            className="user-input"
            type="text"
            placeholder="Enter your username"
          />
          <img className="user-img" src={user} alt="user" />
        </div>
        <div className="username">
          <input
            className="user-input"
            type="password"
            placeholder="Enter your password"
          />
          <img className="user-img" src={pass} alt="user" />
        </div>
        <div className="manage-account">
          <input className="checkbox" type="checkbox" />
          <span className="me">Remember me ?</span>
          <span className="forgot">forgot password ?</span>
        </div>
      </div>
      <button className="btn-submit">Login</button>
      <span className="no-account">
        {" "}
        Don't have account?
        <Link to="/signup" style={{ textDecoration: "none" }}>
           Sign Up
        </Link>
      </span>
    </div>
  );
}

export default Login;
