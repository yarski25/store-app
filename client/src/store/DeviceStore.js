import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Fridges" },
      { id: 2, name: "Smartphones" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [{ id: 1, name: "Iphone 12 pro", price: 25000, rating }];
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
