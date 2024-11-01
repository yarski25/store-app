import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
// import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Context } from "../../main";
import { deleteOneDevice } from "../../api/deviceAPI";
import { observer } from "mobx-react-lite";

const RemoveProduct = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [deviceId, setDeviceId] = useState(0);

  // useEffect(() => {
  //   fetchTypes().then((data) => device.setTypes(data));
  //   fetchBrands().then((data) => device.setBrands(data));
  // }, []);

  const removeDevice = () => {
    // const formData = new FormData();
    // formData.append("deviceId", deviceId);
    deleteOneDevice(deviceId).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Remove product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            className="mt-3"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            placeholder="Enter product id"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={removeDevice}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default RemoveProduct;
