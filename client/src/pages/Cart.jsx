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

  useEffect(() => {
    fetchCart().then((data) => {
      cartDevices = data.rows;
      console.log(cartDevices);
      // cart.setCartDevices(data.rows);
      cart.setTotalCount(data.count);

      deviceIds = cartDevices.map((cartDevice) => cartDevice.deviceId);

      fetchDevicesById(deviceIds).then((data) => {
        // ES6 speciality
        console.log(data.rows);
        cartDevices = cartDevices.map((cartDevice) => ({
          ...cartDevice,
          ...data.rows.find((device) => device.id === cartDevice.deviceId),
        }));
        cart.setCartDevices(cartDevices);
        console.log(cartDevices);
      });
    });
  }, []);

  // useEffect(() => {
  //   fetchDevicesById(deviceIds).then((data) => {
  //     // ES6 speciality
  //     console.log(data.rows);
  //     cart.cartDevices = cart.cartDevices.map((cartDevice) => ({
  //       ...cartDevice,
  //       ...data.rows.find((device) => device.id === cartDevice.deviceId),
  //     }));
  //     console.log(cart.cartDevices);
  //   });
  // }, [cart.totalCount]);

  return (
    <Stack className="col-md-5 mx-auto" gap={3}>
      <CartList />
    </Stack>
  );
});

export default Cart;
