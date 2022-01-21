import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebaseContext";
import { StoreContext } from "../context/storeContext";

const useAuthListener = () => {
  const { firebase } = useContext(FirebaseContext);
  const { userStore } = useContext(StoreContext);

  useEffect(() => {
    if (firebase) {
      const listener = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser && userStore) {
          userStore.setIsAuth(true);
          userStore.setUser(authUser);
          localStorage.setItem("user", JSON.stringify(authUser));
        } else if (userStore) {
          userStore.setIsAuth(false);
          userStore.setUser(null);
          localStorage.removeItem("user");
        }
      });

      return () => listener();
    }
  }, []);

  return userStore;
};

export default useAuthListener;
