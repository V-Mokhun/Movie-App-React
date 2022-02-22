import { observer } from "mobx-react-lite";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import useAuthListener from "./hooks/useAuthListener";
import { ONLY_PUBLIC_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";

const AppRouter: React.FC = observer(() => {
  const userStore = useAuthListener();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.Component} />
        ))}

        {userStore?.isAuth
          ? PRIVATE_ROUTES.map((route) => <Route key={route.path} path={route.path} element={route.Component} />)
          : ONLY_PUBLIC_ROUTES.map((route) => <Route key={route.path} path={route.path} element={route.Component} />)}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
});
export default AppRouter;
