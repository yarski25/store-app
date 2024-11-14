import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      // { id: 1, name: "Fridges" },
      // { id: 2, name: "Smartphones" },
    ];
    this._brands = [
      // { id: 1, name: "Samsung" },
      // { id: 2, name: "Apple" },
    ];
    this._devices = [
      // {
      //   id: 1,
      //   name: "Iphone 12 pro",
      //   price: 25000,
      //   rating: 5,
      //   img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
      // },
      // {
      //   id: 2,
      //   name: "Iphone 12 pro",
      //   price: 35000,
      //   rating: 4,
      //   img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
      // }
    ];

    this._selectedType = {};
    this._selectedBrand = {}; // {brandId: 1, brandName: name}
    this._selectedBrands = []; // [{brandId: 1, brandName: name1}, {brandId: 2, brandName: name2}]
    this._page = 1; // current page
    this._totalCount = 0; // total count of pages during request
    this._limit = 3; // number of products on the page

    makeAutoObservable(this); // mobx checks in case of variable changes
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }

  setSelectedBrands(brands) {
    this.setPage(1);
    this._selectedBrands = brands;
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

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get selectedBrands() {
    return this._selectedBrands;
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
