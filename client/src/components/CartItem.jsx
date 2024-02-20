import React from "react";
import { Button, Form, Image, Stack } from "react-bootstrap";

const CartItem = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <>
      <hr />
      <Stack
        className="d-flex justify-content-center"
        direction="horizontal"
        gap={3}
      >
        <div className="p-2">
          <Image
            src={process.env.REACT_APP_API_URL + "/" + cartItem.img}
            fluid
            height={100}
            width={100}
          />
        </div>
        <div className="p-2">{cartItem.name}</div>
        <div className="p-2">{cartItem.price}</div>
        <div className="p-2">
          <Form.Select
            size="sm"
            value={cartItem.quantity}
            aria-label="Default select example"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </Form.Select>
        </div>
        {/* <div className="p-2">Count</div> */}
        {/* <Button variant="primary">Add/Remove</Button> */}
        {/* <ArrowSelect fontSize={24} fillColor={"black"} /> */}
        <div className="p-2">{cartItem.price * cartItem.quantity}</div>
        <Button variant="dark">Add</Button>
      </Stack>
    </>
  );
};

export default CartItem;
