import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Movies from "../pages/Movies";
import OneMovie from "../pages/OneMovie";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import { HOME_ROUTE, LOG_IN_ROUTE, MOVIES_ROUTE, ONE_MOVIE_ROUTE, PROFILE_ROUTE, SIGN_UP_ROUTE } from "./routes";

export const PUBLIC_ROUTES = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: MOVIES_ROUTE,
    Component: <Movies />,
  },
  {
    path: ONE_MOVIE_ROUTE,
    Component: <OneMovie />,
  },
];

export const ONLY_PUBLIC_ROUTES = [
  {
    path: LOG_IN_ROUTE,
    Component: <LogIn />,
  },
  {
    path: SIGN_UP_ROUTE,
    Component: <SignUp />,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: PROFILE_ROUTE,
    Component: <Profile />,
  },
];
