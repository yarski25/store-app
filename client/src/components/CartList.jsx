import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { Button, Container, Row } from "react-bootstrap";
import CartItem from "./CartItem";

const CartList = observer(() => {
  const { cart } = useContext(Context);
  let totalCount = cart.cartDevices
    .map((cartDevice) => cartDevice.quantity * cartDevice.price)
    .reduce((sum, x) => sum + x, 0);
  console.log(totalCount);

  return (
    <>
      <div className="p-2 d-flex justify-content-center">
        <b>Cart</b>
      </div>
      <Container>
        {cart.cartDevices.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </Container>
      <div
        style={{ backgroundColor: "#f5f5f5" }}
        className="p-2 mt-2 d-flex justify-content-end"
      >
        <div className="p-2">Total price incl. taxes</div>
        <div className="p-2">
          <b>{totalCount} $</b>
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
