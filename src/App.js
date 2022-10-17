import React from "react";

import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { PUBLIC_ROUTES, ROOT } from "./utils/constants/routes";

import MainLayout from "./layouts/MainLayout";

function App() {
  const renderRoutes = () => {
    return Object.values(PUBLIC_ROUTES)
      .filter((el) => typeof el === "object")
      .map((route) => {
        const Component = route.component;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <MainLayout>
                <Component />
              </MainLayout>
            }
          />
        );
      });
  };

  return (
    <Router>
      <Routes>
        {renderRoutes()}

        <Route path="*" element={<Navigate to={ROOT} />} />
      </Routes>
    </Router>
  );
}

export default App;
