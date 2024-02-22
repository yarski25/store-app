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
      cart.setTotalCount(data.count);

      deviceIds = cartDevices.map((cartDevice) => cartDevice.deviceId);

      fetchDevicesById(deviceIds).then((data) => {
        // ES6 speciality
        cartDevices = cartDevices.map((cartDevice) => ({
          ...cartDevice,
          ...data.rows.find((device) => device.id === cartDevice.deviceId),
        }));
        cart.setCartDevices(cartDevices);
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
