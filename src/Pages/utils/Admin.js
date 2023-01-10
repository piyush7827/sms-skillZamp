import React from "react";
import Sidebar from "../../component/Sidebar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Admin() {
  return (
    <div className="bg-light min-vh-100">
      <div className="col-1">
        <Sidebar home="/" />
      </div>
      <div className="container">
        <h3 className="text-primary text-center">
          Welcome, Piyush {localStorage.getItem("name")}
        </h3>
        <p className="text-muted text-center">
          Take a quick looks at your admin stats below.{" "}
        </p>

        {/* STATS CARDS START HERE */}
        <div className="row my-5 mx-2 text-center">
          <div className="col-xs-12 col-lg-3 col-md-6 my-1">
            <div
              className="card cardItem shadow bg-primary text-dark bg-opacity-25 borders-b"
              style={{ width: 15 + "rem" }}
            >
              <div className="card-body">
                <h5 className="card-subtitle mb-2">
                  <i className="bi bi-pencil text-primary mx-2"></i>Open{" "}
                </h5>
                <hr />
                <div className="row">
                  <div className="col">
                    <h1 className="col text-dark mx-4">
                      {/* {ticketStatusCount.pending} */}
                      40
                    </h1>
                  </div>
                  <div className="col">
                    <div style={{ width: 40, height: 40 }}>
                      <CircularProgressbar
                        // value={ticketStatusCount.pending}
                        value={40}
                        styles={buildStyles({
                          textColor: "red",
                          pathColor: "darkblue",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-lg-3 col-md-6 my-1">
            <div
              className="card shadow  bg-warning text-dark bg-opacity-25 borders-y"
              style={{ width: 15 + "rem" }}
            >
              <div className="card-body">
                <h5 className="card-subtitle mb-2">
                  <i className="bi bi-lightning-charge text-warning mx-2"></i>
                  Teacher{" "}
                </h5>
                <hr />
                <div className="row">
                  <div className="col">
                    {" "}
                    <h1 className="col text-dark mx-4">
                      {/* {ticketStatusCount.progress}{" "} */}
                      85
                    </h1>{" "}
                  </div>
                  <div className="col">
                    <div style={{ width: 40, height: 40 }}>
                      <CircularProgressbar
                        // value={ticketStatusCount.progress}
                        value={85}
                        styles={buildStyles({
                          textColor: "red",
                          pathColor: "darkgoldenrod",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-lg-3 col-md-6 my-1">
            <div
              className="card shadow  bg-success text-dark bg-opacity-25 borders-g"
              style={{ width: 15 + "rem" }}
            >
              <div className="card-body">
                <h5 className="card-subtitle mb-2">
                  <i className="bi bi-check2-circle text-success mx-2"></i>
                  Student{" "}
                </h5>
                <hr />
                <div className="row">
                  <div className="col">
                    {" "}
                    <h1 className="col text-dark mx-4">
                      {/* {ticketStatusCount.closed} */}
                      25
                    </h1>{" "}
                  </div>
                  <div className="col">
                    <div style={{ width: 40, height: 40 }}>
                      <CircularProgressbar
                        // value={ticketStatusCount.closed}
                        value={25}
                        styles={buildStyles({
                          textColor: "red",
                          pathColor: "darkolivegreen",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-lg-3 col-md-6 my-1">
            <div
              className="card shadow  bg-secondary text-dark bg-opacity-25 borders-grey"
              style={{ width: 15 + "rem" }}
            >
              <div className="card-body">
                <h5 className="card-subtitle mb-2">
                  <i className="bi bi-slash-circle text-secondary mx-2"></i>
                  Event{" "}
                </h5>
                <hr />
                <div className="row">
                  <div className="col">
                    {" "}
                    <h1 className="col text-dark mx-4">
                      {/* {ticketStatusCount.blocked} */}
                      10
                    </h1>{" "}
                  </div>
                  <div className="col">
                    <div style={{ width: 40, height: 40 }}>
                      <CircularProgressbar
                        // value={ticketStatusCount.blocked}
                        value={10}
                        styles={buildStyles({
                          textColor: "red",
                          pathColor: "black",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-success">
          {/* {message.includes("User") ? message : ""} */}
        </div>
      </div>
    </div>
  );
}

export default Admin;
