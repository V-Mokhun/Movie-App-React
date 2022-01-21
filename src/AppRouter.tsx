import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useAuthListener from "./hooks/useAuthListener";
import { ONLY_PUBLIC_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  const userStore = useAuthListener();

  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.Component} />
      ))}

      {userStore?.isAuth
        ? PRIVATE_ROUTES.map((route) => <Route key={route.path} path={route.path} element={route.Component} />)
        : ONLY_PUBLIC_ROUTES.map((route) => <Route key={route.path} path={route.path} element={route.Component} />)}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRouter;
