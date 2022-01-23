import Firebase from "firebase/compat/app";

export const validateEmail = (email: string) => {
  return email.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const handleSignUp = (firebase: Firebase.app.App, name: string, email: string, password: string) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result: Firebase.auth.UserCredential) => {
      if (result && result.user) {
        result.user.updateProfile({ displayName: name });
      }
    });
};

export const handleLogIn = (firebase: Firebase.app.App, email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
