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
      {device.devices.map((item) => (
        <ProductItem
          key={item.id}
          device={item}
          brand={
            device.brands
              .filter((brand) => brand.id === item.brandId)
              .map((brand) => brand.name)[0]
          }
        />
      ))}
    </Row>
    ///* </Stack> */
  );
});

export default ProductList;
