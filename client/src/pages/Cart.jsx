import { Stack } from "react-bootstrap";
import { fetchCart } from "../api/cartAPI";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import CartList from "../components/CartList";
import { Context } from "../main";
import { fetchDevicesById } from "../api/deviceAPI";

const Cart = observer(() => {
  const { cart } = useContext(Context);
  let cartDevices = [],
    deviceIds = [];

  const allowed = ["item1", "item3"];

  /* DEVICE
  brandId: 2
  ​​
  createdAt: "2024-01-15T16:53:45.300Z"
  ​​
  id: 6
  ​​
  img: "fd6bccb1-cff3-4e41-986c-89586560c64a.jpg"
  ​​
  name: "12 max 2"
  ​​
  price: 10000
  ​​
  rating: 0
  ​​
  typeId: 2
  ​​
  updatedAt: "2024-01-15T16:53:45.300Z"
  */

  /* CART DEVICE
  cartId: 1
​​
  createdAt: "2024-02-15T09:57:04.598Z"
  ​​
  deviceId: 6
  ​​
  id: 1
  ​​
  quantity: 4
  ​​
  updatedAt: "2024-02-15T09:59:21.901Z"
  */

  /* RESULT CART ITEM
  brandId: 2
  ​​
  cartId: 1
  ​​
  createdAt: "2024-01-15T16:53:45.300Z" ==== BAD ===== MUST BE CART ITEM CREATEDAT
  ​​
  deviceId: 6
  ​​
  id: 6 === BAD ==== SHOULD BE CART ITEM ID!!!!
  ​​
  img: "fd6bccb1-cff3-4e41-986c-89586560c64a.jpg"
  ​​
  name: "12 max 2"
  ​​
  price: 10000
  ​​
  quantity: 4
  ​​
  rating: 0
  ​​
  typeId: 2
  ​​
  updatedAt: "2024-01-15T16:53:45.300Z" ==== BAD ===== MUST BE CART ITEM UPDATEDDAT

  */

  // {
  //   id: 1,
  //   name: "Iphone 12 pro",
  //   price: 25000,
  //   rating: 5,
  //   img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
  // },

  // this._cartDevice = [
  //   { id: 1, deviceId: 1, count: 0, cartId: 1},
  //   { id: 2, deviceId: 2, count: 0, cartId: 1},
  //   { id: 3, deviceId: 3, count: 0, cartId: 1},
  // ];

  useEffect(() => {
    fetchCart().then((data) => {
      cartDevices = data.rows;
      cart.setTotalCount(data.count);

      deviceIds = cartDevices.map((cartDevice) => cartDevice.deviceId);

      fetchDevicesById(deviceIds).then((data) => {
        console.log(data.rows);
        console.log(cartDevices);
        // ES6 speciality
        cartDevices = cartDevices.map((cartDevice) => ({
          ...data.rows.find((device) => device.id === cartDevice.deviceId),
          ...cartDevice,
        }));
        console.log(cartDevices);
        cart.setCartItems(cartDevices);
      });
    });
  }, []);

  return (
    <Stack className="col-md-7 mx-auto">
      <CartList />
    </Stack>
  );
});

export default Cart;
