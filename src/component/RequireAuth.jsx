import { useLocation, Navigate, Outlet } from "react-router-dom";
const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();

  return (
    // wrap this condition with status = logged in
    localStorage.getItem("userTypes") === allowedRoles[0] ? ( // admin // parent // teacher // student
      // placeholder for react component
      <Outlet /> // <admin/> or <parent/> or <teacher/> or <student/>
    ) : localStorage.getItem("userTypes") ? (
      <Navigate to="/login" state={{ from: location }} replace />
    ) : (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    )
  );
};

// var x = false

// x ? "piyush Shukla" : "Lorem ipsum"
// if anr error come change navigate vice-versa.
export default RequireAuth;
