import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      // { id: 1, name: "Fridges" },
      // { id: 2, name: "Smartphones" },
      // { id: 3, name: "Notebooks" },
      // { id: 4, name: "TV" },
    ];
    this._brands = [
      // { id: 1, name: "Samsung" },
      // { id: 2, name: "Apple" },
      // { id: 3, name: "Lenovo" },
      // { id: 4, name: "Asus" },
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
      // },
      // {
      //   id: 3,
      //   name: "Iphone 12 pro",
      //   price: 45000,
      //   rating: 2,
      //   img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
      // },
      // {
      //   id: 4,
      //   name: "Iphone 12 pro",
      //   price: 55000,
      //   rating: 5,
      //   img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
      // },
      // {
      //   id: 5,
      //   name: "Iphone 12 pro",
      //   price: 5000,
      //   rating: 2,
      //   img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
      // },
      // {
      //   id: 6,
      //   name: "Iphone 12 pro",
      //   price: 3000,
      //   rating: 5,
      //   img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
      // },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

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
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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
}
