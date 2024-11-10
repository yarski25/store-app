import { observer } from "mobx-react-lite";
import { Card, Stack } from "react-bootstrap";
import { Context } from "../main";
import { useContext, useState } from "react";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (brand) => {
    isSelected ? device.setSelectedBrand({}) : device.setSelectedBrand(brand);
    setIsSelected((prevSelected) => !prevSelected);
  };

  return (
    <Stack className="d-flex flex-row flex-wrap">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          className="p-3"
          key={brand.id}
          onClick={() => handleClick(brand)}
          border={
            isSelected && brand.id === device.selectedBrand.id
              ? "danger"
              : "light"
          }
        >
          {brand.name}
        </Card>
      ))}
    </Stack>
  );
});

export default BrandBar;
