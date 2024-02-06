import React from "react";
import { Button, Form, Stack } from "react-bootstrap";

const CartItem = () => {
  return (
    <>
      <hr />
      <Stack
        className="d-flex justify-content-center"
        direction="horizontal"
        gap={3}
      >
        <div className="p-2">Image</div>
        <div className="p-2">Device name</div>
        <div className="p-2">Item price</div>
        <div className="p-2">
          <Form.Select size="sm" aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
        </div>
        {/* <div className="p-2">Count</div> */}
        {/* <Button variant="primary">Add/Remove</Button> */}
        {/* <ArrowSelect fontSize={24} fillColor={"black"} /> */}
        <div className="p-2">Total price</div>
        <Button variant="dark">Add</Button>
      </Stack>
    </>
  );
};

export default CartItem;
