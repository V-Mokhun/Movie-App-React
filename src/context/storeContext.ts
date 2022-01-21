import { createContext } from "react";
import UserStore from "../store/UserStore";

export const StoreContext = createContext<{
  userStore?: UserStore;
}>({});
