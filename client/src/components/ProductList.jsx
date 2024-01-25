import { useContext } from "react";
import { Context } from "../main";
import { Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import ProductItem from "./ProductItem";

const ProductList = observer(() => {
  const { device } = useContext(Context);

  return (
    // <Stack className="d-flex flex-row flex-wrap">
    <Row className="d-flex">
      {device.devices.map((device) => (
        <ProductItem key={device.id} device={device} />
      ))}
    </Row>
    ///* </Stack> */
  );
});

export default ProductList;
