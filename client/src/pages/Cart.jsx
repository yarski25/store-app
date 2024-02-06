import { Button, Card, Stack } from "react-bootstrap";

const Cart = () => {
  return (
    <Stack gap={3}>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">Image</div>
        <div className="p-2">Device name</div>
        <div className="p-2">Item price</div>
        <Button variant="primary">Add/Remove</Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-up-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
          />
        </svg>
        <div className="p-2">Total price</div>
        <Button variant="primary">Add</Button>
      </Stack>
      <Card>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Add</Button>
        </Card.Body>
      </Card>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
};

export default Cart;
