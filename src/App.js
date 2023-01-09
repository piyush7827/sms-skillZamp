import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import RequireAuth from "./component/RequireAuth";
import Admin from "./Pages/utils/Admin";
import NotFound from "./Pages/NotFound";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-circular-progressbar/dist/styles.css";
import Unauthorized from "./component/Unauthorized";
import Parent from "./Pages/utils/Parent";
import Teacher from "./Pages/utils/Teacher";
import Student from "./Pages/utils/Student";

const ROLES = {
  PARENT: "PARENT",
  TEACHER: "TEACHER",
  STUDENT: "STUDENT",
  ADMIN: "ADMIN",
};
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/Login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}> */}
          <Route path="/admin" exact element={<Admin />} />
          {/* </Route> */}

          <Route element={<RequireAuth allowedRoles={[ROLES.PARENT]} />}>
            <Route path="/parent" element={<Parent />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route path="/teacher" element={<Teacher />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.STUDENT]} />}>
            <Route path="/student" element={<Student />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
