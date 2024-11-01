import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateProduct from "../components/modals/CreateProduct";
import RemoveProduct from "../components/modals/RemoveProduct";
import { useState } from "react";

const Admin = () => {
  const [brandAddVisible, setBrandAddVisible] = useState(false);
  const [typeAddVisible, setTypeAddVisible] = useState(false);
  const [productAddVisible, setProductAddVisible] = useState(false);
  const [productRemoveVisible, setProductRemoveVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeAddVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Add type
      </Button>
      <Button
        onClick={() => setBrandAddVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Add brand
      </Button>
      <Button
        onClick={() => setProductAddVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Add product
      </Button>
      <Button
        onClick={() => setProductRemoveVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Remove product
      </Button>
      <CreateType
        show={typeAddVisible}
        onHide={() => setTypeAddVisible(false)}
      />
      <CreateBrand
        show={brandAddVisible}
        onHide={() => setBrandAddVisible(false)}
      />
      <CreateProduct
        show={productAddVisible}
        onHide={() => setProductAddVisible(false)}
      />
      <RemoveProduct
        show={productRemoveVisible}
        onHide={() => setProductRemoveVisible(false)}
      />
    </Container>
  );
};

export default Admin;
