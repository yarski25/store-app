import { makeAutoObservable } from "mobx";

export default class CartStore {
  constructor() {
    this._cart = {}; // {id: 1 }

    // this._cart = [
    //   { id: 1, userId: 1 },
    //   { id: 2, userId: 2 },
    //   { id: 3, userId: 3 },
    // ];

    this._cartItems = [];

    // this._cartDevice = [
    //   { id: 1, deviceId: 1, count: 0, cartId: 1},
    //   { id: 2, deviceId: 2, count: 0, cartId: 1},
    //   { id: 3, deviceId: 3, count: 0, cartId: 1},
    // ];

    // this._cartDevices = [];

    // this._cartDevice = [
    //   { id: 1, deviceId: 1, count: 0, cartId: 1, name: "Iphone 12 pro", price: 25000, img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" },
    //   { id: 2, deviceId: 2, count: 0, cartId: 1, name: "Iphone 12 pro", price: 25000, img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" },
    //   { id: 3, deviceId: 3, count: 0, cartId: 1, name: "Iphone 12 pro", price: 25000, img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" },
    // ];

    // this._cartDevice = [
    //   { id: 1, deviceId: 1, count: 0, cartId: 1, name: "Iphone 12 pro", price: 25000, img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" },
    //   { id: 2, deviceId: 2, count: 0, cartId: 1, name: "Iphone 12 pro", price: 25000, img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" },
    //   { id: 3, deviceId: 3, count: 0, cartId: 1, name: "Iphone 12 pro", price: 25000, img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" },
    // ];

    this._page = 1; // current page
    this._totalCount = 0; // total count of cart devices during request
    this._limit = 3; // number of cart devices on the page

    makeAutoObservable(this); // mobx checks in case of variable changes
  }

  setCart(cart) {
    this._cart = cart;
  }

  setCartItems(cartItems) {
    this._cartItems = cartItems;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  get cart() {
    return this._cart;
  }

  get cartItems() {
    return this._cartItems;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
