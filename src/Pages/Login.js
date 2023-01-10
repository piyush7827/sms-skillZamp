import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Login.css";
import login from "../images/login.png";
import user from "../images/user.png";
import pass from "../images/pass.png";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import signupimage from "../images/signupimage.jpg";
import { userSignup, userSignin } from "../Api/auth";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [message, setMessage] = useState("");

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState("PARENT");
  const [error, setError] = useState(false);

  // const navigate = useNavigate();

  const signupFn = (e) => {
    const data = {
      name: userName,
      userId: userId,
      email: userEmail,
      userType: userType,
      password: userPassword,
    };

    console.log("DATA", data);

    e.preventDefault();

    userSignup(data)
      .then(function (response) {
        if (response.status === 201) {
          // window.location.href="/"
          setShowSignup(false);
          clearState();
          setError(false);
          setMessage("User Signed Up Successfully...");
        }
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          setError(true);
          setMessage(error.response.data.message);
        } else console.log(error);
      });
  };
  const history = useNavigate();

  const loginFn = (e) => {
    const data = {
      userId: userId,
      password: userPassword,
    };
    console.log("DATA", data);
    e.preventDefault();

    userSignin(data)
      .then(function (response) {
        console.log(response);

        //userId, email, userType, userStatis, token
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("userTypes", response.data.userTypes);
        localStorage.setItem("userStatus", response.data.userStatus);
        localStorage.setItem("token", response.data.accessToken);

        if (response.data.userTypes === "PARENT") {
          history("/parent");
        } else if (response.data.userTypes === "TEACHER") {
          history("/teacher");
        } else if (response.data.userTypes === "CHILDREN") {
          history("/children");
        } else {
          history("/admin");
        }
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          setMessage(error.response.data.message);
        } else {
          console.log(error);
          setMessage(error.resonse.data.message);
        }
      });
  };

  const updateSignupData = (e) => {
    setMessage("");
    if (e.target.id === "userId") setUserId(e.target.value);
    else if (e.target.id === "password") setUserPassword(e.target.value);
    else if (e.target.id === "password") setUserPassword(e.target.value);
    else if (e.target.id === "username") setUserName(e.target.value);
    else setUserEmail(e.target.value);
  };

  const toggleSignup = () => {
    clearState();
    setShowSignup(!showSignup);
  };

  const handleSelect = (e) => {
    setUserType(e);
  };

  const clearState = () => {
    setMessage("");
    setError(false);
    setUserId("");
    setUserPassword("");
    setUserName("");
    setUserEmail("");
  };
  const nav = useNavigate()
  const gotoForgot = () =>{
    nav("/forgot")
  }

  return (
    <div>
      {!showSignup ? (
        <div className="body">
          <div className="main">
            <div className="img">
              <Link to="/">
                {" "}
                <img className="login-img" src={login} alt="login" />
              </Link>{" "}
              <h1>Welcome !</h1>
              <span className="sign-tag">Sign in to your account</span>
            </div>
            <form onSubmit={loginFn}>
              <div className="user-details">
                <div className="username">
                  <input
                    className="user-input"
                    type="text"
                    placeholder="Enter your username"
                    id="userId"
                    onChange={updateSignupData}
                    required
                  />
                  <img className="user-img" src={user} alt="user" />
                </div>
                <div className="username">
                  <input
                    className="user-input"
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    onChange={updateSignupData}
                    required
                  />
                  <img className="user-img" src={pass} alt="user" />
                </div>
                <div className="manage-account">
                  <input className="checkbox" type="checkbox" />
                  <span className="me">Remember me?</span>
                  <span className="forgot" onClick={gotoForgot}>Forgot password?</span>
                </div>
              </div>
              <button className="btn-submit">Login</button>

              <div className="no-account" onClick={toggleSignup}>
                {" "}
                Don't have account?{" "}
                <span style={{ color: "GREEN", cursor: "pointer" }}>
                  SIGN UP
                </span>
              </div>

              <div className="text-danger text-center">{message}</div>
            </form>
          </div>
        </div>
      ) : (
        <div className="bd justify-content-center d-flex align-items-center vh-100">
          <img src={signupimage} alt="bg" className="signup-image" />

          <div className=" auth-container p-5">
            <h1 className="header">Create Account</h1>

            <form onSubmit={signupFn}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter User Id"
                  className="form-control m-1"
                  id="userId"
                  onChange={updateSignupData}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="form-control m-1"
                  id="password"
                  onChange={updateSignupData}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter user name"
                  className="form-control m-1"
                  id="username"
                  onChange={updateSignupData}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="form-control m-1"
                  id="email"
                  onChange={updateSignupData}
                  required
                />
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <label>User Type: </label>
                <DropdownButton
                  align="mid"
                  id="userType"
                  title={userType}
                  className="form-control m-1"
                  variant="success"
                  onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey="PARENT">PARENT</Dropdown.Item>
                  <Dropdown.Item eventKey="STUDENT">STUDENT</Dropdown.Item>
                  <Dropdown.Item eventKey="TEACHER">TEACHER</Dropdown.Item>
                </DropdownButton>
              </div>

              <div>
                <button
                  type="submit"
                  className="form-control m-1 btn btn-primary"
                >
                  Create
                </button>
              </div>
              <span onClick={toggleSignup}>
                Already have an account?{" "}
                <b style={{ cursor: "pointer" }}>LOGIN</b>
              </span>
              <div className="text-danger text-center">{message}</div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
