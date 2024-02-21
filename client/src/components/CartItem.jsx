import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Stack,
} from "react-bootstrap";

const CartItem = ({ cartItem }) => {
  return (
    <>
      <hr />
      <Row className="d-flex justify-content-center align-items-center mt-2">
        {/* <div className="p-2"> */}
        <Col md={1}>
          <Image
            src={process.env.REACT_APP_API_URL + "/" + cartItem.img}
            height={40}
            width={40}
          />
        </Col>
        {/* </div> */}
        {/* <div className="p-2">{cartItem.name}</div>
        <div className="p-2">{cartItem.price}</div> */}
        <Col md={3} className="">
          {cartItem.name}
        </Col>
        <Col md={2} className="d-flex justify-content-end">
          {cartItem.price} $
        </Col>
        {/* <div className="p-2"> */}
        <Col md={1}>
          <Form.Select
            size="sm"
            value={cartItem.quantity}
            aria-label="Default select example"
            style={{ width: "max-content", minWidth: "100%" }}
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
        </Col>
        {/* </div> */}
        {/* <div className="p-2">Count</div> */}
        {/* <Button variant="primary">Add/Remove</Button> */}
        {/* <ArrowSelect fontSize={24} fillColor={"black"} /> */}
        {/* <div className="p-2">{cartItem.price * cartItem.quantity}</div> */}
        <Col md={2} className="d-flex justify-content-end">
          {cartItem.price * cartItem.quantity} $
        </Col>
        {/* <Button variant="dark">Add</Button> */}
        <Col md={2}>
          <Button variant="dark">Delete</Button>
        </Col>
      </Row>
    </>
  );
};

export default CartItem;
