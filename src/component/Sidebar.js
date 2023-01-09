import { CSidebar, CSidebarNav, CNavItem, CNavTitle } from "@coreui/react";

import { Link } from "react-router-dom";

function Sidebar() {
  const backToLogin = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <CSidebar unfoldable className="bg-black vh-100">
      <CSidebarNav>
        <CNavItem className="bg-dark text-center d-flex">
          <i className="bi bi-bar-chart-fill m-4"></i>
          <h5 className="mx-5 my-1 fw-bolder">School Management System</h5>
        </CNavItem>
        <CNavTitle className="">A SMS App for all your needs...</CNavTitle>
        <CNavItem className="d-flex">
          <i className="bi bi-box-arrow-left m-2"></i>
          <Link to="/login" className="text-decoration-none">
            <span className="mx-5 my-1">Home</span>
          </Link>
        </CNavItem>
        <CNavItem className="d-flex">
          <i className="bi bi-box-arrow-left m-2"></i>
          <span className="mx-5 my-1" onClick={backToLogin}>
            Logout
          </span>
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
}

export default Sidebar;
