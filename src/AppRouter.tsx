import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ONLY_PUBLIC_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  const isAuth = false;

  return (
    <Router>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.Component} />
        ))}
        {isAuth
          ? PRIVATE_ROUTES.map((route) => <Route key={route.path} path={route.path} element={route.Component} />)
          : ONLY_PUBLIC_ROUTES.map((route) => <Route key={route.path} path={route.path} element={route.Component} />)}
      </Routes>
    </Router>
  );
};
export default AppRouter;
