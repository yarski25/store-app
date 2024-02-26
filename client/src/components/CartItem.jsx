import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { deleteCartItem, updateCartItem } from "../api/cartAPI";

const CartItem = ({ cartItem }) => {
  // array of options
  const quantities = [...Array(10).keys()].map((i) => (i + 1).toString());

  const [quantity, setQuantity] = useState(cartItem.quantity.toString());

  const handleQuantity = (event) => {
    console.log({
      deviceId: cartItem.deviceId,
      quantity: Number(event.target.value),
    });
    updateCartItem({
      deviceId: cartItem.deviceId,
      quantity: Number(event.target.value),
    }).then((data) => {
      console.log(data);
      setQuantity(event.target.value);
    });
  };

  const handleDelete = () => {
    deleteCartItem(cartItem).then((data) => {
      console.log(data);
    });
    // TODO!
  };

  return (
    <>
      <hr />
      <Row className="d-flex justify-content-center align-items-center mt-2">
        <Col md={1}>
          <Image
            src={process.env.REACT_APP_API_URL + "/" + cartItem.img}
            height={40}
            width={40}
          />
        </Col>
        <Col md={3} className="">
          {cartItem.name}
        </Col>
        <Col md={2} className="d-flex justify-content-end">
          {cartItem.price} $
        </Col>
        <Col md={1}>
          <Form.Select
            size="sm"
            value={quantity}
            key={quantity}
            onChange={handleQuantity}
            aria-label="Default select example"
            style={{ width: "max-content", minWidth: "100%" }}
          >
            {quantities.map((label, index) => (
              <option key={index} value={label}>
                {label}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2} className="d-flex justify-content-end">
          {cartItem.price * cartItem.quantity} $
        </Col>
        <Col md={2}>
          <Button variant="dark" onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CartItem;
