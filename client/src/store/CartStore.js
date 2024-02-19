import { makeAutoObservable } from "mobx";

export default class CartStore {
  constructor() {
    this._cart = {}; // {id: 1 }

    // this._cart = [
    //   { id: 1, userId: 1 },
    //   { id: 2, userId: 2 },
    //   { id: 3, userId: 3 },
    // ];

    this._cartDevices = [];

    // this._cartDevice = [
    //   { id: 1, deviceId: 1, count: 0, cartId: 1 },
    //   { id: 2, deviceId: 2, count: 0, cartId: 1 },
    //   { id: 3, deviceId: 3, count: 0, cartId: 1 },
    // ];

    this._totalCount = 0; // total count of cart devices

    makeAutoObservable(this); // mobx checks in case of variable changes
  }

  setCart(cart) {
    this._cart = cart;
  }

  setCartDevices(cartDevices) {
    this._cartDevices = cartDevices;
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }

  get cart() {
    return this._cart;
  }

  get cartDevices() {
    return this._cartDevices;
  }

  get totalCount() {
    return this._totalCount;
  }
}
