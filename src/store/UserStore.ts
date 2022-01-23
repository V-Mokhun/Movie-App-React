/* eslint-disable lines-between-class-members */
import Firebase from "firebase/compat/app";
import { makeAutoObservable } from "mobx";

class UserStore {
  private _isAuth = false;
  private _user: Firebase.User | null = null;
  private _searchQuery: string = "";

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

  setUser(user: Firebase.User | null) {
    this._user = user;
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setSearchQuery(query: string) {
    this._searchQuery = query;
  }
}

export default new UserStore();
