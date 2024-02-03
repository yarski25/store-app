import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../api/deviceAPI";
import { useState } from "react";
// import PropTypes from "prop-types";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value }).then((data) => setValue(""));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter type name"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// CreateType.propTypes = {
//   show: PropTypes.bool | undefined,
//   onHide: PropTypes.func | undefined,
// };

export default CreateType;
