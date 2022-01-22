import { createContext } from "react";
import userStore from "../store/UserStore";

export const StoreContext = createContext<{
  userStore?: typeof userStore;
}>({});
