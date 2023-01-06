import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./signUp.css";
import signupimage from "../images/signupimage.jpg";
import { Link } from "react-router-dom";
const ROLES = {
  PARENT: "PARENT",
  TEACHER: "TEACHER",
  STUDENT: "STUDENT",
};

const Signup = () => {
  const [userType, setUserType] = useState(ROLES.PARENT);

  return (
    <div className="justify-content-center d-flex align-items-center vh-100">
      <img src={signupimage} alt="bg" className="signup-image" />

      <div className=" auth-container p-5">
        <h1 className="header">Create Account</h1>

        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter User Id"
              className="form-control m-1"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter password"
              className="form-control m-1"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter user name"
              className="form-control m-1"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter email"
              className="form-control m-1"
            />
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <label>User Type: </label>
            <DropdownButton
              align="mid"
              id="userType"
              title={userType}
              className="form-control m-1"
              variant="light"
              onSelect={(val) => {
                setUserType(val);
              }}
            >
              <Dropdown.Item eventKey={ROLES.PARENT}>
                {ROLES.PARENT}
              </Dropdown.Item>
              <Dropdown.Item eventKey={ROLES.STUDENT}>
                {ROLES.STUDENT}
              </Dropdown.Item>
              <Dropdown.Item eventKey={ROLES.TEACHER}>
                {ROLES.TEACHER}
              </Dropdown.Item>
            </DropdownButton>
          </div>

          <div>
            <input
              type="submit"
              className="form-control m-1 btn btn-primary"
              value="Create"
            />
          </div>
          <span>
            Already have an account?
            <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
