import { Stack } from "react-bootstrap";
import { fetchCart } from "../api/cartAPI";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import CartList from "../components/CartList";
import { Context } from "../main";
import { fetchDevicesById } from "../api/deviceAPI";

const Cart = observer(() => {
  const { device, cart } = useContext(Context);
  let cartDevices = [];

  useEffect(() => {
    fetchCart().then((data) => {
      cartDevices = data.rows;
      cart.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    const deviceIds = cart.cartDevices.map((cartDevice) => cartDevice.deviceId);
    fetchDevicesById(deviceIds, cart.page, cart.totalCount).then((data) => {
      // ES6 speciality
      console.log(data.rows);
      cartDevices = cartDevices.map((cartDevice) => ({
        ...cartDevice,
        ...data.rows.find((device) => device.id === cartDevice.deviceId),
      }));
      console.log(cartDevices);
    });
  }, [cart.totalCount]);

  return (
    <Stack className="col-md-5 mx-auto" gap={3}>
      <CartList />
    </Stack>
  );
});

export default Cart;
