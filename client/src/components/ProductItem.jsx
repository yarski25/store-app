import { Card, Col, Image } from "react-bootstrap";
import { DEVICE_ROUTE } from "../utils/consts";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DeviceStore from "../store/DeviceStore";
import star from "../assets/star.png";

const ProductItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card
        style={{ width: 150, cursor: "pointer" }}
        border="light"
        //className="p-3"
        key={device.id}
        //onClick={() => device.setSelectedBrand(brand)}
        //border={brand.id === device.selectedBrand.id ? "danger" : "light"}
      >
        <Card.Img variant="top" width={150} height={150} src={device.img} />
        <Card.Body>
          {/* <Card.Title>{device.name}</Card.Title> */}
          <Card.Text className="text-black-50 d-flex justify-content-between align-items-center">
            <div>Samsung...</div>
            <div className="d-flex align-items-center">
              <div>{device.rating}</div>
              <Image width={16} height={16} src={star} />
            </div>
          </Card.Text>
          <div>{device.name}</div>
          <NavLink to={DEVICE_ROUTE + "/" + device.id}>Details</NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

ProductItem.propTypes = { device: PropTypes.instanceOf(DeviceStore) };

export default ProductItem;
