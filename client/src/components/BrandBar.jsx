import { observer } from "mobx-react-lite";
import { Card, Stack } from "react-bootstrap";
import { Context } from "../main";
import { useContext, useState } from "react";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  // const [selected, setSelected] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleClick = (brand) => {
    let actualBrands = [...selectedBrands];
    if (actualBrands[brand.id] == brand.id) {
      actualBrands[brand.id] = undefined;
    } else {
      actualBrands[brand.id] = brand.id;
    }

    setSelectedBrands(actualBrands);
    console.log(actualBrands);
    console.log(brand);
    device.setSelectedBrands([brand, ...selectedBrands]);
    console.log(device.selectedBrands);
    // setSelected((prevSelected) => !prevSelected);
  };
  // const handleClick = (brand) => {
  //   isSelected ? device.setSelectedBrand({}) : device.setSelectedBrand(brand);
  //   setIsSelected((prevSelected) => !prevSelected);
  // };
  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = Array.from(target.selectedOptions, (option) => option.value);
  //   setSelectedBrands({ [name]: value });
  // };

  return (
    <Stack className="d-flex flex-row flex-wrap">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          className="p-3"
          key={brand.id}
          onClick={() => handleClick(brand)}
          // border={
          //   selected && brand.id === device.selectedBrand.id
          //     ? "danger"
          //     : "light"
          // }
          border={selectedBrands[brand.id] == brand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Stack>
  );
});

export default BrandBar;
