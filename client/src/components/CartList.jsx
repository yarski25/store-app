import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { Button } from "react-bootstrap";
import CartItem from "./CartItem";

const CartList = observer(() => {
  const { cart } = useContext(Context);
  return (
    <>
      <div className="p-2 d-flex justify-content-center">
        <b>Cart</b>
      </div>
      {cart.cartDevices.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div
        style={{ backgroundColor: "#f5f5f5" }}
        className="p-2 mt-2 d-flex justify-content-end"
      >
        <div className="p-2">Total price incl. taxes</div>
        <div className="p-2">
          <b>1000 $</b>
          <b>
            {cart.cartDevices.map(
              (cartDevice) => cartDevice.quantity * cartDevice.price
            )}
          </b>
        </div>
      </div>
      <div className="py-2 d-flex justify-content-between">
        <Button variant="dark">Back</Button>
        <Button variant="dark">Pay</Button>
      </div>
    </>
  );
});

export default CartList;
