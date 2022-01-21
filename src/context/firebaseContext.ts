import Firebase from "firebase/compat/app";
import { createContext } from "react";

export const FirebaseContext = createContext<{ firebase?: Firebase.app.App }>({});
