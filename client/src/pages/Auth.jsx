import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Login</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Insert your email..." />
          <Form.Control
            className="mt-3"
            placeholder="Insert your password..."
          />
          <Stack className="d-flex flex-row justify-content-between mt-3 pl-3 pr-3">
            <div className="my-auto">
              Don&apos;t have an account?{" "}
              <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
            </div>

            {/* <div> */}
            <Button variant="outline-success">Log In</Button>
            {/* </div> */}
          </Stack>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
