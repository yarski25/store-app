import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../api/deviceAPI";
// import PropTypes from "prop-types";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
    createBrand({ name: value }).then((data) => setValue(""));
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Enter brand name"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// CreateBrand.propTypes = {
//   show: PropTypes.bool | undefined,
//   onHide: PropTypes.func | undefined,
// };

export default CreateBrand;
