import { makeAutoObservable } from "mobx";

export default class CartStore {
  constructor() {
    this._cart = [{ id: 1, userId: 1 }];
    this._cartDevice = [{ id: 1, deviceId: 1, count: 1, cartId: 1 }];

    makeAutoObservable(this); // mobx checks in case of variable changes
  }

  setCart(cart) {
    this._cart = cart;
  }

  setCartDevice(cartDevice) {
    this._cartDevice = cartDevice;
  }

  get cart() {
    return this._cart;
  }

  get cartDevice() {
    return this._cartDevice;
  }
}
