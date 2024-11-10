import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
// import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { createDevice, fetchBrands, fetchTypes } from "../../api/deviceAPI";
import { observer } from "mobx-react-lite";

const CreateProduct = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState(null);
  // const [type, setType] = useState(null);
  // const [brand, setBrand] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("typeId", device.selectedType.id);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedType.name || "Select type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => device.setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Select brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => device.setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
          <Form.Control
            className="mt-3"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter product price"
            type="number"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
          <hr />
          <Button onClick={addInfo} variant="outline-dark">
            Add parameter
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-4">
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => {
                    changeInfo("title", e.target.value, i.number);
                  }}
                  placeholder="Enter name"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => {
                    changeInfo("description", e.target.value, i.number);
                  }}
                  placeholder="Enter description"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

// CreateProduct.propTypes = {
//   show: PropTypes.function,
//   onHide: PropTypes.func | undefined,
// };

export default CreateProduct;
