import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

import Admin from "./Pages/utils/Admin";
import NotFound from "./Pages/NotFound";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
            path="/"
          />
          <Route element={<Login />} path="/login" />

          <Route element={<Admin />} path="/admin" />
          <Route element={<NotFound />} path="/*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
