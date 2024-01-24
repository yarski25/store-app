import { Card } from "react-bootstrap";
import { DEVICE_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";

const ProductItem = (device) => {
  return (
    <Card
      style={{ width: "18rem", cursor: "pointer" }}
      className="p-3"
      key={device.id}
      //onClick={() => device.setSelectedBrand(brand)}
      //border={brand.id === device.selectedBrand.id ? "danger" : "light"}
    >
      {device.name}
      <Card.Img variant="top" src={device.img} />
      <Card.Body>
        <Card.Text>
          Price: {device.price} <br />
          Rating: {device.rating}
        </Card.Text>
        <NavLink to={DEVICE_ROUTE + "/" + device.id}>Details</NavLink>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
