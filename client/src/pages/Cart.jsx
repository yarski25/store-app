import { Stack } from "react-bootstrap";
import { fetchCart } from "../api/cartAPI";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import CartList from "../components/CartList";
import { Context } from "../main";

const Cart = observer(() => {
  const { device, cart } = useContext(Context);

  useEffect(() => {
    fetchCart().then((data) => {
      cart.setCartDevices(data.rows);
      cart.setTotalCount(data.count);
    });

    // fetchDevices(null, null, 1, 3).then((data) => {
    //   device.setDevices(data.rows);
    //   device.setTotalCount(data.count);
    // });
  }, []);

  console.log(cart);
  const deviceIds = cart.cartDevices.map((cartDevice) => cartDevice.deviceId);
  console.log(deviceIds);

  // const testArray = [1, 2, 3];
  return (
    <Stack className="col-md-5 mx-auto" gap={3}>
      <CartList />
    </Stack>
  );
});

export default Cart;
