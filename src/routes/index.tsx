import { lazy } from "react";
import {
  HOME_ROUTE,
  LOG_IN_ROUTE,
  DISCOVER_ROUTE,
  ONE_MOVIE_ROUTE,
  PROFILE_ROUTE,
  SEARCH_ROUTE,
  SIGN_UP_ROUTE,
  POPULAR_MOVIES_ROUTE,
  PREMIERE_MOVIES_ROUTE,
  BEST_MOVIES_ROUTE,
  RELEASE_MOVIES_ROUTE,
  AWAIT_MOVIES_ROUTE,
  MOVIES_ROUTE,
} from "./routes";

const Home = lazy(() => import("../pages/Home"));
const Discover = lazy(() => import("../pages/Discover"));
const OneMovie = lazy(() => import("../pages/OneMovie"));
const Movies = lazy(() => import("../pages/Movies"));
const Profile = lazy(() => import("../pages/Profile"));
const Search = lazy(() => import("../pages/Search"));
const SignUp = lazy(() => import("../pages/SignUp"));
const LogIn = lazy(() => import("../pages/LogIn"));
const PopularMovies = lazy(() => import("../pages/PopularMovies"));
const PremiereMovies = lazy(() => import("../pages/PremiereMovies"));
const ReleaseMovies = lazy(() => import("../pages/ReleaseMovies"));
const BestMovies = lazy(() => import("../pages/BestMovies"));
const AwaitMovies = lazy(() => import("../pages/AwaitMovies"));

export const PUBLIC_ROUTES = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: DISCOVER_ROUTE,
    Component: <Discover />,
  },
  {
    path: MOVIES_ROUTE,
    Component: <Movies />,
  },
  {
    path: POPULAR_MOVIES_ROUTE,
    Component: <PopularMovies />,
  },
  {
    path: PREMIERE_MOVIES_ROUTE,
    Component: <PremiereMovies />,
  },
  {
    path: BEST_MOVIES_ROUTE,
    Component: <BestMovies />,
  },
  {
    path: RELEASE_MOVIES_ROUTE,
    Component: <ReleaseMovies />,
  },
  {
    path: AWAIT_MOVIES_ROUTE,
    Component: <AwaitMovies />,
  },
  {
    path: ONE_MOVIE_ROUTE,
    Component: <OneMovie />,
  },
  {
    path: SEARCH_ROUTE,
    Component: <Search />,
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
