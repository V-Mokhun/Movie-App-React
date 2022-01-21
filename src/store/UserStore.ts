/* eslint-disable lines-between-class-members */
import Firebase from "firebase/compat/app";
import { makeAutoObservable } from "mobx";

export default class UserStore {
  private _isAuth = false;
  private _user: Firebase.User | null = null;

  constructor() {
    makeAutoObservable(this);
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
