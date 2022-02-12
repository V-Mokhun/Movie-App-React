import Firebase from "firebase/compat/app";
import UserStore from "../store/UserStore";
import { Movie } from "../types";

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

export const handleLogOut = (firebase: Firebase.app.App) => {
  return firebase.auth().signOut();
};

export const isInWatchList = (userStore: typeof UserStore | undefined, movie: Partial<Movie>) => {
  if (userStore) {
    if (movie.kinopoiskId) {
      return userStore.isMovieInWatchList(movie.kinopoiskId);
    }
    if (movie.filmId) {
      return userStore.isMovieInWatchList(movie.filmId);
    }
  }

  return false;
};

export const handleWatchlist = (userStore: typeof UserStore | undefined, movie: Partial<Movie>) => {
  if (userStore) {
    if (movie.kinopoiskId) {
      if (userStore.isMovieInWatchList(movie.kinopoiskId)) {
        userStore.removeFromWatchList(movie.kinopoiskId);
      } else {
        userStore.addToWatchList(movie);
      }
    } else if (movie.filmId) {
      if (userStore.isMovieInWatchList(movie.filmId)) {
        userStore.removeFromWatchList(movie.filmId);
      } else {
        userStore.addToWatchList(movie);
      }
    }
  }
};
