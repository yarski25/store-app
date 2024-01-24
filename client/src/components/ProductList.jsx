import { useContext } from "react";
import { Context } from "../main";
import { Card, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const ProductList = () => {
  const { device } = useContext(Context);

  return (
    <Stack className="d-flex flex-row flex-wrap">
      {device.devices.map((device) => (
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
            {/* <Card.Title>{device.name}</Card.Title> */}
            <Card.Text>
              Price: {device.price} <br />
              Rating: {device.rating}
            </Card.Text>
            <NavLink to={DEVICE_ROUTE + "/" + device.id}>Details</NavLink>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
};

export default ProductList;
