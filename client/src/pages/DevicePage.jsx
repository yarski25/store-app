import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from "../assets/star.png";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../api/deviceAPI";
import { Context } from "../main";
const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const { cart } = useContext(Context);
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  const addItem = (deviceId) => {
    cart.setCart({});
  };
  // const device = {
  //   id: 1,
  //   name: "Iphone 12 pro",
  //   price: 25000,
  //   rating: 5,
  //   img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
  // };
  // const description = [
  //   { id: 1, title: "Operating memory", description: "5 GB" },
  //   { id: 2, title: "Camera", description: "12 Mpx" },
  //   { id: 3, title: "Processor", description: "Pentium 4" },
  //   { id: 4, title: "Number of cors", description: "2" },
  //   { id: 5, title: "Battery", description: "4000 mAh" },
  // ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + "/" + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgrey",
            }}
          >
            <h3>From: {device.price} CZK</h3>
            <Button onClick={() => addItem()} variant="outline-dark">
              Add to cart
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Description</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgrey" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
