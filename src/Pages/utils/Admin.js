import React from "react";
import Sidebar from "../../component/Sidebar";

function Admin() {
  return (
    <div className="bg-light min-vh-100">
      <div className="col-1">
        <Sidebar home="/" />
      </div>
    </div>
  );
}

export default Admin;
