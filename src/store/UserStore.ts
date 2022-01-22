/* eslint-disable lines-between-class-members */
import Firebase from "firebase/compat/app";
import { makeAutoObservable } from "mobx";

class UserStore {
  private _isAuth = false;
  private _user: Firebase.User | null = null;

  constructor() {
    makeAutoObservable(this);
    this._user = JSON.parse(localStorage.getItem("user") || "null");

    if (this._user) {
      this._isAuth = true;
    }
  }

  get user() {
    return this._user;
  }

  get isAuth() {
    return this._isAuth;
  }

  setUser(user: Firebase.User | null) {
    this._user = user;
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }
}

export default new UserStore();
