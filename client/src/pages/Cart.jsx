import { Button, Stack } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { fetchCart } from "../api/cartAPI";
import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    fetchCart();
  }, []);

  const testArray = [1, 2, 3];
  return (
    <Stack className="col-md-5 mx-auto" gap={3}>
      <div className="p-2 d-flex justify-content-center">
        <b>Cart</b>
      </div>
      {testArray.map((item) => (
        <CartItem key={item} />
      ))}
      <div
        style={{ backgroundColor: "#f5f5f5" }}
        className="p-2 mt-2 d-flex justify-content-end"
      >
        <div className="p-2">Total price incl. taxes</div>
        <div className="p-2">
          <b>1000 $</b>
        </div>
      </div>
      <div className="py-2 d-flex justify-content-between">
        <Button variant="dark">Back</Button>
        <Button variant="dark">Pay</Button>
      </div>
    </Stack>
  );
};

export default Cart;
