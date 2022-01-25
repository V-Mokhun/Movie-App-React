/* eslint-disable lines-between-class-members */
import Firebase from "firebase/compat/app";
import { makeAutoObservable } from "mobx";
import { Movie } from "../types";

type WatchlistMovie = Partial<Movie>;

class UserStore {
  private _isAuth = false;
  private _user: Firebase.User | null = null;
  private _searchQuery: string = "";
  private _watchlist: WatchlistMovie[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get user() {
    return this._user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get searchQuery() {
    return this._searchQuery;
  }

  get watchList() {
    return this._watchlist;
  }

  setUser(user: Firebase.User | null) {
    this._user = user;
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setSearchQuery(query: string) {
    this._searchQuery = query;
  }

  setWatchList(watchlist: WatchlistMovie[]) {
    this._watchlist = watchlist;
  }

  addToWatchList(movie: WatchlistMovie) {
    this._watchlist.push(movie);
  }

  removeFromWatchList(id: number) {
    this._watchlist = this._watchlist.filter((movie) => {
      if (movie.filmId) {
        return movie.filmId !== id;
      }

      return movie.kinopoiskId !== id;
    });
  }

  isMovieInWatchList(id: number) {
    // eslint-disable-next-line no-unneeded-ternary
    return this._watchlist.find((movie) => movie.filmId === id || movie.kinopoiskId === id) ? true : false;
  }
}
export default new UserStore();
