import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false; // underline _ means that variable can't be changed
    this._user = {};
    makeAutoObservable(this); // mobx checks in case of variable changes
  }

  setIsAuth(value) {
    this._isAuth = value;
  }

  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
