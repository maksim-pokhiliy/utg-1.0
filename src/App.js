import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import { PUBLIC_ROUTES, ROOT } from "./utils/constants/routes";

import "./utils/i18n";

function App() {
  const renderRoutes = () => {
    return Object.keys(PUBLIC_ROUTES).map((route) => {
      const Component = PUBLIC_ROUTES[route];

      return (
        <Route
          key={route}
          path={route}
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
